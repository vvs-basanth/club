"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Join Our Mission",
    description:
      "At GITAM Aero Astro Club, we believe in the power of Learning, Collaboration, Experimentation, and Passion. We're a dedicated, goal-driven team that thrives together with our vibrant community. Every day, we use the very tools we build, ensuring our commitment to innovation and excellence is at the heart of everything we do.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Grow with Us",
    description:
      "We foster an environment where you can learn and grow alongside a diverse and inclusive team. We believe that varied perspectives drive innovation, and together, we create opportunities for personal and professional development. Join us in shaping a future where everyone’s unique voice is valued.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
 
