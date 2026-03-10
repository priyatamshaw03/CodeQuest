"use client";

import React, { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import SplitterLayout from "react-splitter-layout";
import 'react-splitter-layout/lib/index.css';
import { CourseExercise } from "../page";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

function CodeEditor({courseExerciseData, loading}: Props) {
  return (
    <div className="h-full">
      <SandpackProvider template="static"
      style={{
        height: "100vh"
      }}
      files={courseExerciseData?.exerciseData.exercisesContent.starterCode}>
        
        <SandpackLayout 
        style={{
        height: "100%"
      }}>
        <SplitterLayout percentage
        primaryMinSize={30}
        secondaryMinSize={30}
        secondaryInitialSize={50}>
          <SandpackCodeEditor 
          style={{
        height: "100%"
      }}/>
          <SandpackPreview 
          style={{
        height: "100%"
      }}/>
      </SplitterLayout>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default CodeEditor;
