"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ShaderBackground from "../ui/shader-background";
import Header from "../core/Header";
import TheProblem from "./TheProblem";
import Section from "./Section";
import Section2 from "./Section2";
import Aurora from "./Aurora";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative ubuntu rounded-bl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-gradient-to-b from-[#a259ff] to-transparent opacity-40 rounded-full blur-3xl"></div>
        <Aurora
          colorStops={["#9112BC", "#9929EA", "#9929EA"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <main className="max-w-[1440px] mx-auto px-4">
          <div className="px-5 py-5 w-full min-h-screen flex flex-col items-center justify-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="ubuntu mt-32 text-3xl md:text-4xl lg:text-6xl text-shadow-lg text-white font-bold max-w-[1100px] text-center mt-5"
            >
              Simulate your launch before it happens.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              className="ubuntu max-w-[600px] text-center text-white text-shadow-lg font-bold mt-3"
            >
              Twinning Labs enables enterprises test products and marketing
              campaigns in customer simulations so every launch starts with
              certainty.
            </motion.p>

            {/* Button */}
            <motion.div
              className="flex items-center justify-center gap-5 mt-10"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              <Link
                href={"https://calendly.com/twinningaiteam/30min"}
                target="_blank"
                className="inline-flex font-montserrat items-center gap-2 rounded-full bg-gradient-to-l from-[#a259ff] to-[#6f29ff] border-3 border-purple-400 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#a259ff] hover:text-white hover:shadow-pink-700/25"
              >
                Book a Product Simulation Demo
                <ArrowRight className="h-6 w-6 rotate-[-45deg]" />
              </Link>
            </motion.div>

            {/* Video with Safari + Web fallback */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.4 }}
                className="w-full max-w-[1200px] mx-auto mt-20 rounded-2xl shadow-lg overflow-hidden"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  {/* Chrome, Edge, Firefox */}
                  <source src="/videos/output.webm" type="video/webm" />
                  {/* Safari macOS + iOS */}
                  <source
                    src="/videos/render_2.mov"
                    type='video/mp4; codecs="hvc1"'
                  />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </section>
      <Section />
      <Section2 />
      <TheProblem />
    </>
  );
};

export default HeroSection;
