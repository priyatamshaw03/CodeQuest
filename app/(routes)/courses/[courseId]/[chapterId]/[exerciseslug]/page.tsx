"use client"

import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { exercise } from '../../../_components/CourseList';
import ContentSection from './_components/ContentSection';
import CodeEditor from './_components/CodeEditor';

export type CourseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  exercises: exercise[];
  exerciseData: ExerciseData;
  completedExercises?: {
    chapterId: number;
    exerciseId: string;
  }[];
};

export type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseName: string;
  exerciseId: string;
  exercisesContent: ExercisesContent;
  // xp: number;
  // technology: string;
};

export type ExercisesContent= {
  content: string;
  hint: string;
  hintxp: string;
  starterCode: any;
  task: string;
}


function Playground() {

  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);
  const [courseExerciseData, setCourseExerciseData] =
    useState<CourseExercise>();

  
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
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  return (
    <div className='border-t-4'>
        <SplitterLayout percentage 
            primaryMinSize={40}
            secondaryInitialSize={60}
        >
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
                loading={loading}/>
        </div>
        
      </SplitterLayout>
    </div>
  )
}

export default Playground