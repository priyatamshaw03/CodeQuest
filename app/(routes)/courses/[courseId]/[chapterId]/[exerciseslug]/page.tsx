"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import { exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  editorType?: string;
  exercises: exercise[];
  exerciseData: ExerciseData;
  completedExercises?: {
    chapterId: number;
    exerciseId: number;
  }[];
};

export type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseName: string;
  exerciseId: string;
  exercisesContent: ExercisesContent;
};

export type ExercisesContent = {
  content: string;
  hint: string;
  hintxp: string;
  starterCode: any;
  task: string;
};

function Playground() {
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);
  const [courseExerciseData, setCourseExerciseData] =
    useState<CourseExercise>();
  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
  const [nextButtonRoute, setNextButtonRoute]=useState<string>();
  const [prevButtonRoute, setPrevButtonRoute]=useState<string>();


  useEffect(() => {
    GetExerciseCourseDetail();
  }, [courseId, chapterId, exerciseslug]);

  const GetExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post("/api/exercise", {
      courseId,
      chapterId,
      exerciseId: exerciseslug,
    });
    console.log(result.data);
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!courseExerciseData) return;

    GetExerciseDetail();
    GetPrevNextButtonRoute();
  }, [courseExerciseData]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseData?.exercises?.find(
      (item) => item.slug == exerciseslug,
    );
    setExerciseInfo(exerciseInfo);
  };

  const GetPrevNextButtonRoute = () => {
    // current index of exercise
    const currentExerciseIndex = courseExerciseData?.exercises?.findIndex(
      (item) => item.slug === exerciseslug
    );
    if (currentExerciseIndex === undefined || currentExerciseIndex === -1) return;
    const NextExercise =
      courseExerciseData?.exercises[currentExerciseIndex + 1]?.slug;
    const PrevExercise =
      courseExerciseData?.exercises[currentExerciseIndex - 1]?.slug;
    // console.log(NextEercise, PrevEercise);

    setNextButtonRoute(NextExercise?`/courses/${courseId}/${chapterId}/${NextExercise}`:undefined);
    setPrevButtonRoute(PrevExercise?`/courses/${courseId}/${chapterId}/${PrevExercise}`:undefined);


  };

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div className="flex flex-col h-full min-h-0">
          <div className="flex-1 overflow-y-auto min-h-0 pr-2">
            <ContentSection
              courseExerciseData={courseExerciseData}
              loading={loading}
            />
          </div>
        </div>

        <div>
          <CodeEditor
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </div>
      </SplitterLayout>

      <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex py-2 px-6 justify-between items-center">
        {/* Back to Course */}
        <Link href={`/courses/${courseId}`}>
          <Button variant={"pixel"} className="text-xl cursor-pointer">
            Back to Course
          </Button>
        </Link>
        <Link href={prevButtonRoute??'/courses/'+courseId}>
        <Button variant={"pixel"} className="text-xl cursor-pointer">
          Previous
        </Button>
        </Link>
        
        <div className="flex gap-3 items-center">
          <Image src="/star.png" alt="star" width={40} height={40} />
          <h2 className="text-2xl">
            You can Earn <span className="text-4xl">{exerciseInfo?.xp}</span> XP
          </h2>
        </div>
        <Link href={nextButtonRoute??'/courses/'+courseId}>
        <Button variant={"pixel"} className="text-xl cursor-pointer">
          Next
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Playground;
