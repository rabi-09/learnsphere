"use client";
import React from "react";
import { StickyScroll } from "../components/sticky-scroll-reveal";
import img1 from "../assets/features/feature-1.jpg"
import img2 from "../assets/features/feature-2.jpg"
import img3 from "../assets/features/feature-3.jpg"
import img4 from "../assets/features/feature-4.png"


const content = [
  {
    title: "Personalized AI Learning",
    description:
"Harness the power of AI to customize your learning path. LearnSphere analyzes your progress to deliver content tailored to your needs, ensuring efficient and effective skill-building.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src={img4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Interactive Course Materials",
    description:
      "Engage deeply with interactive lessons, quizzes, and projects designed to enhance understanding and retention. LearnSphere makes learning dynamic and fun with hands-on content.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Collaborative Learning Environment",
    description:
     "Connect and collaborate easily with peers and instructors. Share ideas, work on group projects, and communicate seamlessly through integrated live chat and webinars.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Effortless Content Management",
    description:
      "Experience real-time updates and never stress about Collaborative Learning Environment again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src={img2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];
export function Features() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
