"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

import CourseDetailBanner from "./_components/CourseDetailBanner";
import CourseChapters from "./_components/CourseChapters";

import UpgradeToPro from "../../dashboard/_components/UpgradeToPro";
import CommunityHelpSection from "./_components/CommunityHelpSection";
import { Course } from "../_components/CourseList";
import CourseStatus from "./_components/CourseStatus";

export default function Page() {
  const { courseId } = useParams();

  const [courseDetail, setCourseDetail] = useState<Course>();
  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
      courseId && GetCourseDetail();
  }, [courseId]);

  const GetCourseDetail = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`/api/course?courseid=${courseId}`);
      setCourseDetail(result?.data);
      setIsEnrolled(result?.data.userEnrolled);
      setIsPro(result?.data.subscription === "premium");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <CourseDetailBanner
        loading={loading}
        courseDetail={courseDetail}
        refreshData={()=>GetCourseDetail()}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 sm:px-8 md:px-16 lg:px-36 py-8">
        <div className="lg:col-span-2">
          <CourseChapters
            loading={loading}
            courseDetail={courseDetail}
            isEnrolled={isEnrolled}
          />
        </div>

        <div className="flex flex-col gap-6">
          <CourseStatus courseDetail={courseDetail} />

          {!isPro && <UpgradeToPro />}

          <CommunityHelpSection />
        </div>
      </div>
    </div>
  );
}
