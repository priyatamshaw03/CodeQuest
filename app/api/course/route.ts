import { db } from "@/config/db";
import { CourseChaptersTable, CourseTable } from "@/config/schema";
import { asc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const {searchParams} = new URL(req.url);
  const courseId = searchParams.get('courseId')
  if(courseId){
    //@ts-ignore
    const result= await db.select().from(CourseTable).where(eq(CourseTable.courseId,courseId));
    //@ts-ignore
    const chapterResult= await db.select().from(CourseChaptersTable).where(eq(CourseChaptersTable.courseId,courseId)).orderBy(asc(CourseChaptersTable.chapterId));;
    return NextResponse.json(
      {
        ...result[0],
        chapters: chapterResult
      }
    );
  }
  else{
    
    const result = await db.select().from(CourseTable).orderBy(asc(CourseTable.courseId));;
    return NextResponse.json(result);
  }
  
  
}