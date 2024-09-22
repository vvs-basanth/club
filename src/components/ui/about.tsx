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
  {
    title: "Version control",
    description:
      "Version control is at the core of efficient and collaborative software development. At [Your Company Name], we leverage powerful tools like Git to track changes, manage contributions, and ensure code integrity. With version control, every team member can collaborate seamlessly, experiment confidently, and revert to previous versions when necessary. It's not just about managing code—it's about creating a transparent and reliable workflow that drives innovation and keeps projects on track.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Our community is at the heart of everything we do. We thrive on collaboration, support, and shared success. By bringing together diverse voices and talents, we create a space where everyone can contribute, grow, and make an impact. Whether you're a team member, user, or partner, you're part of a vibrant, inclusive network that values connection and celebrates innovation. Together, we build, learn, and succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
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
 
