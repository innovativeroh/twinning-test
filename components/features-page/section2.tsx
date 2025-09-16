import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Testimonial from "./testimonials";

const Section = () => {
  return (
    <div className="w-full rounded-t-3xl bg-purple-50 relative overflow-hidden p-6 sm:p-12 md:p-20 lg:p-40 py-10 sm:py-14 md:py-16 lg:py-20 rounded-b-3xl">
      {/* Adjusted gradient size and blur for mobile */}
      <div className="absolute top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1200px] h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] bg-gradient-to-b from-[#a259ff] to-transparent opacity-40 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="flex flex-wrap justify-center text-black gap-6 sm:gap-8 md:gap-10 flex-col mb-12 sm:mb-16 md:mb-20 items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] text-center font-MessinaSans text-[#a259ff]">
          Customer Foresight in Real Time
        </h1>
        <p className="text-base sm:text-lg max-w-[90%] sm:max-w-[700px] md:max-w-[800px] text-center font-montserrat">
          Twinning Labs runs live simulations of how customers will respond - helping you refine products and campaigns before committing resources.
        </p>
      </div>

      <div className="text-black max-w-[90%] sm:max-w-[800px] md:max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-MessinaSans mb-4 sm:mb-5">
              Real-Time Conversations
            </h1>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Forecast launches and category impact
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg">
                    Predict trial, repeat purchase, and category impact in days, not quarters, for new products and campaigns.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  A/B test messaging and creatives
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg">
                    Instantly test claims, creatives, and campaigns against thousands of shopper twins to identify the best performers.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  Respond to market shifts in real time
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg">
                    Model competitor launches, price changes, or inflation scenarios to protect your margin and adapt quickly.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-MessinaSans font-bold text-lg sm:text-xl">
                  De-risk packaging and design decisions
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="font-montserrat font-thin text-base sm:text-lg">
                    Validate colors, claims, and layouts with digital twins that evolve with market conditions and shopper preferences.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <video
              src="/videos/motion.mp4"
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