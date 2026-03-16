"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { Course } from "../(routes)/courses/_components/CourseList";
import axios from "axios";


// const courses = [
//   {
//     id: 1,
//     name: "HTML",
//     desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
//     level: "Beginner",
//   },
//   {
//     id: 2,
//     name: "CSS",
//     desc: "Master CSS to style and design responsive layouts.",
//     level: "Beginner",
//   },
//   {
//     id: 3,
//     name: "JavaScript",
//     desc: "Learn core JavaScript and modern ES6 features.",
//     level: "Beginner",
//   },
//   {
//     id: 4,
//     name: "Python",
//     desc: "Learn Python programming from basics.",
//     level: "Beginner",
//   },
//   {
//     id: 5,
//     name: "React",
//     desc: "Build dynamic and interactive web applications.",
//     level: "Beginner",
//   },
//   {
//     id: 6,
//     name: "React Advanced",
//     desc: "Advanced React concepts including hooks and optimization.",
//     level: "Advanced",
//   },
//   {
//     id: 7,
//     name: "Java",
//     desc: "Learn Java programming fundamentals including OOP, data types, loops, and core concepts.",
//     level: "Beginner",
//   },
// ];

function Header() {
  const { user } = useUser();
  const { exerciseslug } = useParams();
  const [courses, setCourses]=useState<Course[]>([]);

  useEffect(()=>{
    GetCourses();
  },[])
  const GetCourses= async ()=>{
    const result = await axios.get('/api/course');
    console.log(result.data)
    setCourses(result.data)
  }

  return (
    <header className="w-full border-b border-zinc-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <h2 className="text-3xl font-game mt-3">CodeQuest</h2>
        </Link>

        {/* CENTER NAVIGATION */}
        <div className="absolute left-1/2 -translate-x-1/2 flex">
          {!exerciseslug && courses.length > 0 ? (
            <NavigationMenu className="font-game">
              <NavigationMenuList className="gap-8">

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl">
                    Courses
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 gap-3 w-[520px] p-4">
                      {courses.map((course) => (
                        <li
                          key={course.id}
                          className="p-3 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition"
                        >
                          <Link href={`/courses/${course.id}`}>
                            <h2 className="text-lg text-white">{course?.title}</h2>

                            <p className="text-sm text-gray-400 line-clamp-2">
                              {course?.desc}
                            </p>

                            <p className="text-xs text-yellow-300 uppercase">
                              Level: {course.level}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-xl">
                    <Link href="/projects">Projects</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-xl">
                    <Link href="/pricing">Pricing</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-xl">
                    <Link href="/contact-us">Contact Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <h2 className="font-game text-2xl">
              {exerciseslug?.toString().replaceAll("-", " ").toUpperCase()}
            </h2>
          )}
        </div>

        {/* RIGHT SIDE AUTH */}
        <div className="flex items-center gap-6">

          {!user ? (
            <Link href="/sign-in">
              <Button variant="pixel" className="font-game cursor-pointer text-xl">
                Signin
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-5">
              <Link href="/dashboard">
                <Button variant="pixel" className="font-game text-xl cursor-pointer">
                  Dashboard
                </Button>
              </Link>
              <UserButton/>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default Header;