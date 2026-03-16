"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CourseProgressCard from "./CourseProgressCard";

export type EnrolledCourseInfo = {
  bannerImage: string;
  courseId: number;
  completedExercises: number;
  level: string;
  title: string;
  totalExercises: number;
  xpEarned: number;
};

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserEnrolledCourse();
  }, []);

  const getUserEnrolledCourse = async () => {
    try {
      setLoading(true);
      const result = await axios.get("/api/course?courseid=enrolled");
      setEnrolledCourses(result.data || []);
    } catch (error) {
      console.error("Error fetching enrolled courses", error);
      setEnrolledCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-full">
      <h2 className="text-3xl mb-4 font-game">Your Enrolled Courses</h2>

      {/* Loading */}
      {loading && (
        <Skeleton className="w-full h-32 rounded-2xl my-5" />
      )}

      {/* Empty State */}
      {!loading && enrolledCourses.length === 0 && (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src="/books.png" alt="book" width={90} height={90} />

          <h2 className="text-xl font-game text-center">
            You don't have any enrolled courses
          </h2>

          <Link href="/courses">
            <Button
              variant="pixel"
              className="font-game text-lg cursor-pointer"
              size="lg"
            >
              Browse all courses
            </Button>
          </Link>
        </div>
      )}

      {/* Enrolled Courses */}
      {!loading && enrolledCourses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {enrolledCourses.map((course) => (
            <CourseProgressCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EnrolledCourses;