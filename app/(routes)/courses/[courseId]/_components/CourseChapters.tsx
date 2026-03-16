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

type Props = {
  loading: boolean;
  courseDetail?: Course;
  isEnrolled: boolean;
};

function CourseChapters({ loading, courseDetail, isEnrolled }: Props) {
  const { has } = useAuth();
  const hasPremiumAccess = has && has({ plan: "premium" });

  const isExerciseCompleted = (chapterId: number, exerciseSlug: string) => {
    return courseDetail?.completedExercises?.some(
      (item) =>
        item.chapterId === chapterId &&
        String(item.exerciseId) === exerciseSlug
    );
  };

  const enableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapter: any
  ) => {
    if (!isEnrolled) return false;

    const completed = courseDetail?.completedExercises ?? [];
    const chapters = courseDetail?.chapters ?? [];

    if (!chapters.length) return false;

    // First exercise of course
    if (!completed.length) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    const prevExercise = chapter.exercises?.[exerciseIndex - 1];

    if (
      prevExercise &&
      isExerciseCompleted(chapter.chapterId, prevExercise.slug)
    ) {
      return true;
    }

    const prevChapter = chapters?.[chapterIndex - 1];

    if (prevChapter) {
      const prevCompleted = prevChapter.exercises?.every((e: any) =>
        isExerciseCompleted(prevChapter.chapterId, e.slug)
      );

      if (prevCompleted && exerciseIndex === 0) return true;
    }

    return false;
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section>
        {loading || !courseDetail?.chapters?.length ? (
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
          <div className="p-4 sm:p-5 border-4 rounded-2xl mt-4">
            <Accordion type="single" collapsible>
              {courseDetail.chapters.map((chapter, chapterIndex) => (
                <AccordionItem
                  key={chapter.chapterId}
                  value={`item-${chapterIndex}`}
                >
                  <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-base sm:text-2xl md:text-3xl">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-zinc-800 flex items-center justify-center rounded-full text-sm sm:text-2xl md:text-3xl">
                          {chapterIndex + 1}
                        </div>
                        <h2 className="truncate">{chapter.name}</h2>
                      </div>

                      {!hasPremiumAccess && chapterIndex >= 2 && (
                        <h2 className="font-game text-xl border-3 px-3 bg-yellow-400 text-black rounded-full">
                          Premium
                        </h2>
                      )}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="p-4 sm:p-6 bg-zinc-900 rounded-xl">
                      {chapter.exercises?.map(
                        (exercise: any, exerciseIndex: number) => {
                          const completed = isExerciseCompleted(
                            chapter.chapterId,
                            exercise.slug
                          );

                          const enabled = enableExercise(
                            chapterIndex,
                            exerciseIndex,
                            chapter
                          );

                          let tooltipMessage = "Complete previous exercise";

                          if (!isEnrolled)
                            tooltipMessage = "Enroll to unlock exercises";
                          else if (!enabled)
                            tooltipMessage = "Complete previous exercise";
                          else if (!hasPremiumAccess && chapterIndex >= 2)
                            tooltipMessage = "Upgrade to Premium";

                          const canAccess =
                            enabled &&
                            courseDetail?.userEnrolled &&
                            (hasPremiumAccess || chapterIndex < 2);

                          return (
                            <div
                              key={exercise.slug}
                              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 font-game">
                                <h2 className="text-sm sm:text-lg md:text-2xl">
                                  Exercise {exerciseIndex + 1}
                                </h2>

                                <h2 className="text-sm sm:text-lg md:text-2xl">
                                  {exercise.name}
                                </h2>
                              </div>

                              {completed ? (
                                <Button
                                  variant="pixel"
                                  className="bg-green-600 text-black"
                                  disabled
                                >
                                  Completed
                                </Button>
                              ) : canAccess ? (
                                <Link
                                  href={`/courses/${courseDetail?.id}/${chapter.chapterId}/${exercise.slug}`}
                                >
                                  <Button
                                    variant="pixel"
                                    className="cursor-pointer"
                                  >
                                    {exercise?.xp} XP
                                  </Button>
                                </Link>
                              ) : (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className="cursor-not-allowed">
                                      <Button
                                        variant="pixelDisabled"
                                        disabled
                                      >
                                        Locked
                                      </Button>
                                    </span>
                                  </TooltipTrigger>

                                  <TooltipContent
                                    side="left"
                                    className="font-game text-sm sm:text-lg"
                                  >
                                    {tooltipMessage}
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>
    </TooltipProvider>
  );
}

export default CourseChapters;