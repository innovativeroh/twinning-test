import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Testimonial from "./testimonials";

const Section = () => {
  return (
    <div className="w-full rounded-t-3xl bg-purple-950 relative overflow-hidden p-6 pt-20 pb-20 sm:p-12 md:p-20 lg:p-40 rounded-b-3xl">
      {/* Adjusted gradient size and blur for mobile */}
      <div className="absolute top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-b from-[#a259ff] to-transparent opacity-40 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="flex flex-wrap justify-center text-white gap-6 sm:gap-8 md:gap-10 flex-col mb-12 sm:mb-16 md:mb-20 items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] text-center font-MessinaSans">
          AI-powered simulations that predict and optimize every customer
          interaction
        </h1>
        <p className="text-base sm:text-lg max-w-[90%] sm:max-w-[700px] md:max-w-[800px] text-center font-montserrat text-neutral-300">
          Forget guesswork and rigid testing cycles. With Twinning Engine,
          simulate outcomes on a 1:1 level, personalize in real time, and drive
          measurable gains in retention, loyalty, and lifetime value.
        </p>
      </div>

      <div className="text-white max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] mx-auto relative z-10">
        {/* A/B Testing Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="w-full lg:flex-1 order-1 lg:order-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-MessinaSans mb-4 sm:mb-5">
              A/B Testing Simulation
            </h1>
            <p className="rounded-lg text-base sm:text-lg font-lato">
              Problem: Live tests waste budget, take months, and deliver
              inconclusive results. Solution: Run unlimited A/B simulations of
              campaigns, claims, or creatives in hours not quarters. Predict
              conversion lift, incrementality, and margin impact before spending
              a dollar. “Why run a $5M promo just to learn it doesn’t move
              the needle?”
            </p>
          </div>
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2 lg:order-none">
            <Image
              src="/icons/Image.png"
              alt="Image"
              width={1920}
              height={1080}
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="text-white max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] mx-auto relative z-10 mt-12 sm:mt-16 md:mt-20 lg:mt-40">
        {/* Simulation Engine Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="w-full lg:flex-1 flex justify-center lg:justify-start order-2 lg:order-none">
            <video
              src="/videos/SimulationEngineVideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mx-auto rounded-xl"
              aria-label="Video"
            >
              <track kind="descriptions" label="Video description" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:flex-1 order-1 lg:order-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-MessinaSans mb-4 sm:mb-5">
              Simulation Engine
            </h1>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Predict campaign outcomes before launch
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-raleway text-base sm:text-lg">
                    Run simulations to forecast performance and eliminate the
                    risks of trial-and-error campaigns.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-rubik text-lg sm:text-xl">
                  Test creative, targeting, and messaging
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-raleway text-base sm:text-lg">
                    Compare variations side by side to uncover the
                    highest-performing strategies with confidence.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-rubik text-lg sm:text-xl">
                  Reinforcement Learning that adapts
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-raleway text-base sm:text-lg">
                    AI that keeps learning from every outcome helping you cut
                    costs, reduce guesswork, and scale what works.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;