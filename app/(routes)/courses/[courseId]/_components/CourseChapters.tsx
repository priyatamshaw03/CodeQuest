"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Course } from "../../_components/CourseList";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

function CourseChapters({ loading, courseDetail }: Props) {
  return (
    <section>
      {!courseDetail?.chapters?.length ? (
        <Skeleton className="w-full h-[100px] rounded-2xl" />
      ) : (
        <div className="p-4 sm:p-5 border-4 rounded-2xl">
          {courseDetail.chapters.map((chapter, chapterIndex) => (
            <Accordion type="single" collapsible key={chapterIndex}>
              <AccordionItem value={`item-${chapterIndex}`}>
                <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-base sm:text-xl md:text-3xl">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-zinc-800 flex items-center justify-center rounded-full">
                      {chapterIndex + 1}
                    </div>
                    <h2>{chapter.name}</h2>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="p-4 sm:p-6 bg-zinc-900 rounded-xl">
                    {chapter.exercises.map(
                      (exercise: any, exerciseIndex: number) => (
                        <div
                          key={exerciseIndex}
                          className="flex items-center justify-between mb-4"
                        >
                          <div className="flex gap-6 font-game">
                            <h2>
                              Exercise {exerciseIndex + 1}
                            </h2>
                            <h2>{exercise.name}</h2>
                          </div>

                          <Link
                            href={`/courses/${courseDetail.id}/${chapter.chapterId}/${exercise.slug}`}
                          >
                            <Button variant="pixel">
                              {exercise.xp} XP
                            </Button>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
}

export default CourseChapters;