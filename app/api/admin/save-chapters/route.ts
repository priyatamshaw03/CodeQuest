import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';

export async function GET(req: NextRequest) {
 const DATA = [
  {
    "id": 1,
    "name": "Advanced Component Patterns",
    "desc": "Learn advanced patterns like compound components, render props, and higher-order components.",
    "exercises": []
  },
  {
    "id": 2,
    "name": "React Router Deep Dive",
    "desc": "Build multi-page applications using React Router with nested routes and dynamic routing.",
    "exercises": []
  },
  {
    "id": 3,
    "name": "Context API",
    "desc": "Manage global state across components using React Context.",
    "exercises": []
  },
  {
    "id": 4,
    "name": "Custom Hooks",
    "desc": "Create reusable logic by building your own custom React hooks.",
    "exercises": []
  },
  {
    "id": 5,
    "name": "State Management",
    "desc": "Manage complex application state using tools like Redux or Zustand.",
    "exercises": []
  },
  {
    "id": 6,
    "name": "API Integration",
    "desc": "Fetch and manage remote data using Axios, Fetch API, and async logic.",
    "exercises": []
  },
  {
    "id": 7,
    "name": "React Query / Data Fetching",
    "desc": "Handle caching, background updates, and server state using React Query or similar libraries.",
    "exercises": []
  },
  {
    "id": 8,
    "name": "Performance Optimization",
    "desc": "Improve performance using memoization techniques like React.memo, useMemo, and useCallback.",
    "exercises": []
  },
  {
    "id": 9,
    "name": "Code Splitting & Lazy Loading",
    "desc": "Optimize bundle size using React.lazy and Suspense for dynamic imports.",
    "exercises": []
  },
  {
    "id": 10,
    "name": "Testing React Applications",
    "desc": "Write unit and component tests using Jest and React Testing Library.",
    "exercises": []
  },
  {
    "id": 11,
    "name": "Authentication & Protected Routes",
    "desc": "Implement authentication and secure routes using JWT or authentication providers.",
    "exercises": []
  },
  {
    "id": 12,
    "name": "Advanced React Project",
    "desc": "Build a production-level React application using routing, API integration, state management, and optimization techniques.",
    "exercises": []
  }
]


const promises = DATA.map(item =>
  db.insert(CourseChaptersTable).values({
    courseId: 6,
    desc: item?.desc,
    exercises: JSON.stringify(item.exercises),
    name: item.name,
    chapterId: item.id,
  })
);
try {
  await Promise.all(promises);
  return NextResponse.json("Success");
} catch (err) {
  console.error(err);
  return NextResponse.json({ error: String(err) }, { status: 500 });
}}
