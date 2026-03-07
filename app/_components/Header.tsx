"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
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
import { Menu, X } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
    level: "Beginner",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive layouts.",
    path: "/course/2/detail",
    level: "Beginner",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications.",
    path: "/course/3/detail",
    level: "Beginner",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Advanced React concepts including hooks and optimization.",
    path: "/course/4/detail",
    level: "Advanced",
  },
  {
    id: 5,
    name: "Python",
    desc: "Learn Python programming from basics.",
    path: "/course/5/detail",
    level: "Beginner",
  },
  {
    id: 6,
    name: "JavaScript",
    desc: "Learn core JavaScript and modern ES6 features.",
    path: "/course/6/detail",
    level: "Beginner",
  },
];

function Header() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3 max-w-7xl flex justify-between items-center w-full mx-auto">
      {/* Logo */}
      <Link href={"/"}>
        <div className="flex gap-2 px-4 items-center">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <h2 className="mt-2 text-2xl md:text-3xl font-game">CodeQuest</h2>
        </div>
      </Link>

      {/* Desktop Navigation (UNCHANGED) */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu className="font-game">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Courses
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-[320px] sm:w-[420px] md:w-[520px] p-3">
                  {courses.map((course, index) => (
                    <li
                      key={index}
                      className="p-3 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition"
                    >
                      <Link href={`/courses/${course.id}`}>
                        <h2 className="text-lg text-white">{course.name}</h2>

                        <p className="text-sm text-gray-400 line-clamp-2">
                          {course.desc}
                        </p>

                        <p className="text-sm text-yellow-300 uppercase">
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
                <Link href={"/pricing"}>Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl">
                <Link href={"/contact-us"}>Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Section Desktop */}
        {!user ? (
          <Link href={"/sign-in"}>
            <Button
              className="font-game text-xl cursor-pointer"
              variant={"pixel"}
            >
              Signin
            </Button>
          </Link>
        ) : (
          <div className="flex gap-6 items-center">
            <Link href="/dashboard">
              <Button
                className="font-game text-xl cursor-pointer"
                variant="pixel"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden px-4">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-zinc-900 border-t border-zinc-800 md:hidden p-5 flex flex-col gap-5 font-game z-50">
          <Link href="/courses">Courses</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact-us">Contact Us</Link>

          {!user ? (
            <Link href="/sign-in">
              <Button variant="pixel" className="w-full">
                Signin
              </Button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button variant="pixel" className="w-full">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
