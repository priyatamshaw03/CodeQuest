import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress?.emailAddress;

    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, email));

    if (users.length === 0) {
      const newUser = {
        name: user.fullName ?? "",
        email: email ?? "",
        points: 0,
      };

      const result = await db.insert(usersTable).values(newUser).returning();

      return NextResponse.json(result[0]);
    }

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error("User API Error:", error);

    return NextResponse.json(
      { message: "User creation failed" },
      { status: 500 }
    );
  }
}