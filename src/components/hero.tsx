"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-zinc-300 text-center">
          Welcome to GITAM Aero Astro Club
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Grow with us!
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-white px-4 py-2">
          <a href="https://aero-astro-club.gitbook.io/gaac-membership">
          Apply Now
          </a>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
