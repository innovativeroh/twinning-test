import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Section = () => {
  return (
    <div className="w-full rounded-t-4xl bg-purple-950 relative overflow-hidden p-8 sm:p-16 md:p-24 lg:p-20 rounded-b-4xl">
      {/* Circular gradient with adjusted opacity and size for better visual balance */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#a259ff] to-transparent opacity-30 rounded-full blur-3xl md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1000px]"></div>

      <div className="relative flex flex-col items-center justify-center text-white gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">


        {/* Main headline with enhanced typography and animation */}
        <h1 className="text-3xl sm:text-4xl tracking-[-3px] md:text-5xl lg:text-6xl font-bold max-w-[90%] sm:max-w-[800px] lg:max-w-[1100px] text-center font-MessinaSans leading-tight animate-fade-in">
          AI-Powered Simulations to Optimize Every Customer Interaction
        </h1>

        {/* Subheadline with improved readability */}
        <p className="text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[700px] leading-7 lg:max-w-[800px] text-center font-montserrat text-neutral-300">
          Eliminate guesswork with Twinning Engines real-time, 1:1 simulations.
          Predict outcomes, personalize experiences, and boost retention,
          loyalty, and lifetime value with precision.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 animate-slide-up">
          <Link
            href="https://app.twinninglabs.com/"
            target="_blank"
            className="text-lg inline-flex font-montserrat items-center gap-2 rounded-full bg-gradient-to-l from-[#a259ff] to-[#6f29ff] border-3 border-purple-400 px-6 py-2 mt-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#a259ff] hover:text-white hover:shadow-pink-700/25"
          >
            Try Twinning Engine Now <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
