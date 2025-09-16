import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Testimonial from "./testimonials";
import Image from "next/image";

const Section = () => {
  return (
    <div className="w-full rounded-t-3xl bg-purple-950 relative overflow-hidden p-6 sm:p-12 md:p-20 lg:p-40 rounded-b-3xl">
      {/* Adjusted gradient size and blur for mobile */}
      <div className="absolute top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-b from-[#a259ff] to-transparent opacity-40 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="text-white max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-MessinaSans mb-4 sm:mb-5">
              Dynamic Digital Twin Generation
            </h1>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Seamless integrations in minutes
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg text-neutral-300">
                    Twinning Engine connects instantly with CRMs, ad platforms,
                    and analytics tools, so you can unify your entire marketing
                    stack without complex setups.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Smarter campaigns through simulation
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg text-neutral-300">
                    Run campaign simulations before launch to predict outcomes,
                    refine targeting, and reduce wasted spend - all powered by
                    AI-driven insights.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Data that works across every channel
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg text-neutral-300">
                    From sales funnels to customer journeys, Twinning Labs keeps
                    your data in sync, ensuring consistent and personalized
                    experiences across all touchpoints.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <video
              src="/videos/DigitalTwinGenerationVideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto rounded-xl"
              aria-label="Video"
            >
              <track kind="descriptions" label="Video description" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;