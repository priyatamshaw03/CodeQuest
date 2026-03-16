"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Link from "next/link";

export type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tags: string;
  chapters?: Chapter[];
  userEnrolled?: boolean;
  courseEnrolledInfo?: CourseEnrolledInfo;
  completedExercises?: CompletedExercise[];
};

export type CourseEnrolledInfo = {
  xpEarned: number;
  enrolledDate: any;
};

export type CompletedExercise = {
  chapterId: number;
  courseId: number;
  exerciseId: number;
};

export type Chapter = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  id: number;
  exercises: Exercise[];
};

export type Exercise = {
  id: number;
  name: string;
  slug: string;
  exerciseId: string;
  chapterId: number;
  xp: number;
  difficulty: string;
};

type Props = {
  smallerCard?: boolean;
  maxLimit?: number;
};

function CourseList({ smallerCard, maxLimit }: Props) {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllCourses();
  }, []);

  const GetAllCourses = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/course");

      if (res.data) {
        setCourseList(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
        
        {loading ? (
          <div className="col-span-full text-2xl sm:text-4xl text-center text-gray-400 font-game py-10">
            Loading courses...
          </div>
        ) : (
          courseList?.map(
            (course, index) =>
              (!maxLimit || index < maxLimit) && (
                <Link href={`/courses/${course?.courseId}`} key={index}>
                  <div className="border-2 border-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-900 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex flex-col h-full">

                    <div className="relative w-full aspect-video">
                      <Image
                        src={course?.bannerImage?.trimEnd() || "/placeholder.png"}
                        width={400}
                        height={400}
                        alt={course?.title}
                        className={`w-full ${
                          smallerCard ? "h-[120px]" : "h-[200px]"
                        } object-cover rounded-t-lg`}
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h2 className="font-game text-lg sm:text-xl md:text-2xl line-clamp-2">
                        {course.title}
                      </h2>

                      <p className="font-game text-sm sm:text-base text-gray-400 line-clamp-3 mt-2 flex-1">
                        {course.desc}
                      </p>

                      <div className="mt-4">
                        <span className="bg-zinc-800 inline-flex items-center gap-2 font-game text-xs sm:text-sm px-3 py-1 rounded-2xl">
                          <ChartNoAxesColumnIncreasingIcon className="h-4 w-4" />
                          {course.level}
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              )
          )
        )}
      </div>
  );
}

export default CourseList;