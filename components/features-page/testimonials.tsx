import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 p-6 sm:p-10">
      <div
        className="rounded-[40px] sm:rounded-[60px] p-6 sm:p-10
        shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.10),_10px_10px_30px_4px_rgba(162,89,255,0.15)]
bg-black
        border border-white/5"
      >
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center text-center
          rounded-3xl sm:rounded-4xl p-8 sm:p-12
bg-zinc-50
shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.10),_10px_10px_30px_4px_rgba(162,89,255,0.15)]
          border border-white/5"
        >
          <FaQuoteRight
            className="text-white/20 absolute -z-0 top-6 left-6 blur-sm"
            size={140}
          />
          <FaQuoteRight className="text-white/70" size={24} />

          <p className="text-white text-2xl sm:text-3xl max-w-[1000px] py-8 font-MessinaSans font-bold leading-relaxed">
            “We built Twinning Labs to give marketers freedom from manual
            guesswork. Our mission is simple: empower teams with AI-driven
            simulations that unlock smarter campaigns and measurable growth.”
          </p>

          <p className="font-lato font-medium text-sm sm:text-base">
            <span className="text-white/70">Trusted innovation in </span>
            <span
              className="bg-clip-text text-transparent inline-block
              bg-[linear-gradient(90deg,#a259ff_0%,#6f29ff_100%)]"
            >
              AI-driven marketing intelligence.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
