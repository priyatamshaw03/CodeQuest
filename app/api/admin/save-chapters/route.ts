import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';

export async function GET(req: NextRequest) {
 const DATA =
[
  {
    "id": 1,
    "name": "React Hooks",
    "desc": "Master React hooks to manage state and lifecycle in functional components.",
    "exercises": [
      {"name": "useEffect Explorer", "slug": "useeffect-explorer", "xp": 35, "difficulty": "medium"},
      {"name": "Side Effect Mission", "slug": "side-effect-mission", "xp": 35, "difficulty": "medium"},
      {"name": "Cleanup Handler", "slug": "cleanup-handler", "xp": 35, "difficulty": "medium"},
      {"name": "Custom Hook Builder", "slug": "custom-hook-builder", "xp": 40, "difficulty": "hard"},
      {"name": "Hook Puzzle", "slug": "hook-puzzle", "xp": 40, "difficulty": "hard"},
      {"name": "Hook Arena", "slug": "hook-arena", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 2,
    "name": "Context API",
    "desc": "Share global state across components without prop drilling.",
    "exercises": [
      {"name": "Context Creator", "slug": "context-creator", "xp": 35, "difficulty": "medium"},
      {"name": "Provider Setup", "slug": "provider-setup", "xp": 35, "difficulty": "medium"},
      {"name": "Consumer Mission", "slug": "consumer-mission", "xp": 35, "difficulty": "medium"},
      {"name": "Global State Puzzle", "slug": "global-state-puzzle", "xp": 40, "difficulty": "hard"},
      {"name": "Theme Switcher", "slug": "theme-switcher", "xp": 40, "difficulty": "hard"},
      {"name": "Context Arena", "slug": "context-arena", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 3,
    "name": "React Router",
    "desc": "Build multi-page experiences using React Router.",
    "exercises": [
      {"name": "Router Setup", "slug": "router-setup", "xp": 35, "difficulty": "medium"},
      {"name": "Route Builder", "slug": "route-builder", "xp": 35, "difficulty": "medium"},
      {"name": "Dynamic Routes", "slug": "dynamic-routes", "xp": 40, "difficulty": "hard"},
      {"name": "Navigation Links", "slug": "navigation-links", "xp": 35, "difficulty": "medium"},
      {"name": "Protected Routes", "slug": "protected-routes", "xp": 40, "difficulty": "hard"},
      {"name": "Router Arena", "slug": "router-arena", "xp": 50, "difficulty": "hard"}
    ]
  },
  {
    "id": 4,
    "name": "Performance Optimization",
    "desc": "Optimize React apps using memoization and performance techniques.",
    "exercises": [
      {"name": "Memo Explorer", "slug": "memo-explorer", "xp": 40, "difficulty": "hard"},
      {"name": "useMemo Mission", "slug": "usememo-mission", "xp": 40, "difficulty": "hard"},
      {"name": "useCallback Builder", "slug": "usecallback-builder", "xp": 40, "difficulty": "hard"},
      {"name": "Render Optimization", "slug": "render-optimization", "xp": 40, "difficulty": "hard"},
      {"name": "Lazy Loading", "slug": "lazy-loading", "xp": 45, "difficulty": "hard"},
      {"name": "Performance Arena", "slug": "performance-arena", "xp": 55, "difficulty": "hard"}
    ]
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
