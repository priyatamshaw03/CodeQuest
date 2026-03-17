"use client";

import React from "react";
import type { Course } from "../../_components/CourseList";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { exec } from "child_process";

type Props = {
  loading: boolean;
  courseDetail?: Course;
  isEnrolled: boolean;
};

function CourseChapters({ loading, courseDetail, isEnrolled }: Props) {
  const { has } = useAuth();
  const hasPremiumAccess = has && has({ plan: "premium" });

  const EnableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapterExercisesLength: number,
  ) => {
    const completed = courseDetail?.completedExercises;

    // If nothing is completed, enable FIRST exercise ONLY
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    // last completed
    const last = completed[completed.length - 1];

    // Convert to global exercise number
    const currentExerciseNumber =
      chapterIndex * chapterExercisesLength + exerciseIndex + 1;

    const lastCompletedNumber =
      (last.chapterId - 1) * chapterExercisesLength + last.exerciseId;

    return currentExerciseNumber === lastCompletedNumber + 2;
  };

  const isExerciseCompleted = (chapterId: number, exerciseId: number) => {
    const completedChapters = courseDetail?.completedExercises;
    const completedChapter = completedChapters?.find(
      (item) => item.chapterId == chapterId && item.exerciseId == exerciseId,
    );
    return completedChapter ? true : false;
  };

  return (
    <section>
      { loading ? (
        <div className="p-4 sm:p-5 border-4 rounded-2xl mt-4 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-6">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-8 w-64" />
              </div>

              <div className="space-y-4 pl-16">
                {[1, 2, 3].map((_, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-48" />
                    </div>
                    <Skeleton className="h-10 w-24 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="p-5 border-4 rounded-2xl"
        >
          {courseDetail?.chapters?.map((chapter, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="mt-3">
              <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-4xl">
                <div className="flex items-center justify-between w-full">
                <div className="flex gap-10">
                  <h2 className="h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center">
                    {index + 1}
                  </h2>
                  <h2 className="truncate">{chapter?.name}</h2>
                </div>
                {!hasPremiumAccess &&index >= 2 && <h2 className="font-game text-xl rounded-full px-4 py-1 bg-yellow-400 text-black">Premium</h2>}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-7 bg-zinc-900 rounded-xl">
                  {chapter?.exercises.map((exc, indexExc) => (
                    <div
                      key={indexExc}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-10 mb-5 font-game">
                        <h2 className="text-3xl">
                          Exercise{" "}
                          {index * chapter?.exercises?.length + indexExc + 1}
                        </h2>
                        <h2 className="text-3xl">{exc?.name}</h2>
                      </div>

                      {isExerciseCompleted(
                          chapter?.chapterId,
                          Number(indexExc) + 1,
                        ) ? 
                        <Link
                          href={`/courses/${courseDetail?.id}/${chapter.chapterId}/${exc?.slug}`}
                        >
                        <Button
                          variant={"pixel"}
                          className="bg-green-600 text-black"
                        >
                          Completed
                        </Button>
                        </Link>
                       : courseDetail?.userEnrolled && (!hasPremiumAccess && index < 2) ?
                            <Link
                          href={`/courses/${courseDetail?.id}/${chapter.chapterId}/${exc?.slug}`}
                        >
                          <Button variant={"pixel"} className="cursor-pointer">
                            {exc?.xp} XP
                          </Button>
                        </Link> :
                        hasPremiumAccess && courseDetail?.userEnrolled ? 
                        <Link
                          href={`/courses/${courseDetail?.id}/${chapter.chapterId}/${exc?.slug}`}
                        >
                          <Button variant={"pixel"} className="cursor-pointer">
                            {exc?.xp} XP
                          </Button>
                        </Link> :
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-not-allowed">
                              <Button variant={"pixelDisabled"}>Locked</Button>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-game text-sm sm:text-lg">
                              Enroll to unlock Exercises
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      }
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </section>
  );
}

export default CourseChapters;
