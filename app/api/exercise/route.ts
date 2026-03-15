import { CourseChaptersTable, ExerciseTable, CompletedExerciseTable, CourseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq, and } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {

    const { courseId, chapterId, exerciseId } = await req.json();

    const courseInfo= await db.select().from(CourseTable)
    .where(eq(CourseTable.courseId, courseId));

    const courseResult = await db
      .select()
      .from(CourseChaptersTable)
      .where(eq(CourseChaptersTable.courseId, courseId));

    const exerciseResult = await db
      .select()
      .from(ExerciseTable)
      .where(
        and(
          eq(ExerciseTable.courseId, courseId),
          eq(ExerciseTable.exerciseId, exerciseId)
        )
      );

      // get completed exercise in that course/chapter
      const completedExercise = await db.select().from(CompletedExerciseTable)
         .where(and(eq(CompletedExerciseTable?.courseId, courseId), eq(CompletedExerciseTable?.chapterId, chapterId))) 

    return NextResponse.json({
      ...courseResult[0],
      exerciseData: exerciseResult[0],
      completedExercise: completedExercise,
      editorType: courseInfo[0]?.editorType,
    });
  
}
