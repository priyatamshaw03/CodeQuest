import React from "react";
import { CourseExercise } from "../page";
import { Skeleton } from "@/components/ui/skeleton";
import { Book, Goal, Lightbulb } from "lucide-react";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

function ContentSection({ courseExerciseData, loading }: Props) {
  const contentInfo = courseExerciseData?.exerciseData;

  return (
    <div className="p-10 mb-28">
      {loading || !contentInfo ? (
        <Skeleton className="h-full m-10 w-full rounded-2xl" />
      ) : (
        <div>
          <h2 className="font-game text-3xl my-3 flex items-center gap-2">
            <Book className="text-yellow-500"/>
            {courseExerciseData?.exerciseData?.exerciseName}
          </h2>

          <div
            className="
              prose prose-invert max-w-none
              overflow-x-hidden
              break-words
              [&_img]:max-w-full
              [&_pre]:overflow-x-auto
              [&_code]:break-words
            "
            dangerouslySetInnerHTML={{
              __html: contentInfo?.exercisesContent?.content || "",
            }}
          />

          {/* task */}
          <div className="mt-6">
            <h2 className="font-game text-xl sm:text-2xl md:text-3xl mb-2 flex items-center gap-2 text-blue-400">
              <Goal className="h-5 w-5 shrink-0" />
              Task
            </h2>
            <div
              className="
                p-4 border rounded-2xl bg-zinc-800
                prose prose-invert max-w-none
                overflow-x-hidden
                [&_pre]:overflow-x-auto
              "
              dangerouslySetInnerHTML={{
                __html: contentInfo.exercisesContent?.task || "",
              }}
            />
          </div>

          {/* Hint */}
          <div className="mt-4 mb-16">
            <h2 className="font-game text-xl sm:text-2xl md:text-3xl mb-2 flex items-center gap-2 text-yellow-400">
              <Lightbulb className="h-5 w-5 shrink-0" />
              Hint
            </h2>
            <div
              className="
                p-4 border rounded-2xl bg-zinc-800
                prose prose-invert max-w-none
                overflow-x-hidden
                [&_pre]:overflow-x-auto
              "
              dangerouslySetInnerHTML={{
                __html: contentInfo.exercisesContent?.hint || "",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentSection;
