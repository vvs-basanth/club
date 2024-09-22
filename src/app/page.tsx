import { AuroraBackgroundDemo } from "@/components/hero";
import { AnimatedModalDemo } from "@/components/jobs";
import { StickyScrollRevealDemo } from "@/components/ui/about";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AuroraBackgroundDemo />
      <StickyScrollRevealDemo />
      <AnimatedModalDemo />
    </div>
  );
}
