"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

type Course = {
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tags: string;
  userEnrolled?: boolean;
};

type Props = {
  loading: boolean,
  courseDetail: Course | undefined,
  refreshData: () => void;
};

function CourseDetailBanner({ loading, courseDetail, refreshData }: Props) {
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const enrollCourse = async () => {
    try {
      setLoadingEnroll(true);

      const result = await axios.post("/api/enroll-course", {
        courseId: courseDetail?.courseId,
      });

      if (result.data) {
        toast.success("Enrolled Successfully!");
        refreshData(); // refresh course data
      }
    } catch (error) {
      toast.error("Enrollment Failed");
      console.log(error);
    } finally {
      setLoadingEnroll(false);
    }
  };

  return (
    <section>
      {!courseDetail ? (
        <Skeleton className="w-full h-[200px] sm:h-[260px] md:h-[300px] rounded-2xl" />
      ) : (
        <div className="relative w-full">
          <Image
            src={courseDetail?.bannerImage?.trimEnd() || '/course-banner.gif'}
            alt={courseDetail?.title || ''}
            width={1400}
            height={300}
            className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
            <div className="font-game px-6 sm:px-10 md:px-20 lg:px-36">
              <h2 className="text-2xl sm:text-4xl md:text-6xl">
                {courseDetail?.title}
              </h2>

              <p className="text-sm sm:text-lg md:text-2xl mt-2 text-gray-300 max-w-3xl">
                {courseDetail?.desc}
              </p>

              {!courseDetail.userEnrolled ? (
                <Button
                  onClick={enrollCourse}
                  className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-2xl"
                  variant="pixel"
                  size="lg"
                  disabled={loadingEnroll}
                >
                  {loadingEnroll && (
                    <Loader2Icon className="animate-spin mr-2" />
                  )}
                  Enroll Now
                </Button>
              ) : (
                <Button
                  className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-2xl"
                  variant="pixel"
                  size="lg"
                >
                  Continue Learning
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CourseDetailBanner;