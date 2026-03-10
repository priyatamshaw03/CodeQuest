import { CourseChaptersTable, ExerciseTable, CompletedExerciseTable, CourseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq, and } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { courseId, chapterId, exerciseId } = await req.json();
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress!;

    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      .where(
        and(
          eq(CourseChaptersTable.courseId, courseId),
          eq(CourseChaptersTable.chapterId, chapterId)
        )
      );

    const courseResult = await db
      .select()
      .from(CourseTable)
      .where(eq(CourseTable.courseId, courseId));

    const exerciseResult = await db
      .select()
      .from(ExerciseTable)
      .where(
        and(
          eq(ExerciseTable.courseId, courseId),
          eq(ExerciseTable.chapterId, chapterId),
          eq(ExerciseTable.exerciseId, exerciseId)
        )
      );

    const completed = await db
      .select()
      .from(CompletedExerciseTable)
      .where(
        and(
          eq(CompletedExerciseTable.courseId, courseId),
          eq(CompletedExerciseTable.userId, userEmail)
        )
      );

    return NextResponse.json({
      ...chapterResult[0],
      exerciseData: {
        ...exerciseResult[0],
        // technology: courseResult[0].technology?.toLowerCase() || "static"
      },
      completedExercises: completed,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
