import React from "react";
import Header from "../core/Header";
import { LogoMarquee } from "@/components/ui/logoMarquee";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-pink-50 via-white to-white pt-20 relative overflow-hidden">
      <main className="max-w-[1440px] mx-auto relative">
        <div className="px-5 md:px-10 pt-30 pb-20 min-h-[50vh] w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-7xl text-black font-bold tracking-[-3px] font-MessinaSans max-w-[1100px] text-center">
            Test Before You Launch. Simulate Before You Spend.
          </h1>
          <p className="text-xl text-neutral-700 max-w-[800px] font-montserrat font-medium text-center">
            Stop gambling on flavors, packaging, and campaigns. With
            Twinning Labs, every product and every message is tested with your
            customers before it hits the shelf.
          </p>
          <Link
            href={"https://calendly.com/twinningaiteam/30min"}
            target="_blank"
            className="inline-flex font-montserrat items-center gap-2 rounded-full bg-gradient-to-l from-[#a259ff] to-[#6f29ff] border-3 border-purple-400 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#a259ff] hover:text-white hover:shadow-pink-700/25"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
          </Link>
        </div>
      </main>
      <LogoMarquee />
    </section>
  );
};

export default HeroSection;
