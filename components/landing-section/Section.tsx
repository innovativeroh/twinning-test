import { ArrowRight } from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LogoMarquee } from "../ui/logoMarquee";
import Image from "next/image";

const DataTeamsSection: React.FC = () => {
  return (
    <>
      <section className="py-20 px-6 bg-purple-50 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Power Your Entire Marketing Stack with the {" "}
            <span className="font-bold bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent">
              Twinning Engine
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Twinning Labs seamlessly integrates with your existing sales,
            marketing, and data stack. From CRMs to ad platforms, connect in
            minutes and start simulating smarter campaigns.
          </p>
          <div>
            <LogoMarquee />
          </div>
          {/* 3-way grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group flex flex-col text-left bg-purple-50 p-8 transition-all duration-300"
              role="region"
              aria-labelledby="version-control-heading"
            >
            <video
              src="/videos/motion2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[350px] mb-2 w-[400px] mx-auto rounded-4xl"
              aria-label="Video"
            >
              <track kind="descriptions" label="Video description" />
              Your browser does not support the video tag.
            </video>
              <h3
                id="version-control-heading"
                className="text-xl font-semibold flex items-center gap-2 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent mb-3"
              >
                Integration with Your Stack
              </h3>
              <p className="text-gray-600 text-justify">
                Twinning Labs seamlessly integrates with your existing sales,
                marketing, and data stack. From CRMs to ad platforms, connect in
                minutes and start simulating smarter campaigns.
              </p>
              <div className="flex justify-end mt-5">
                <FaArrowRight size={48} className="text-zinc-200 flex" />
              </div>
            </div>
            <div
              className="group flex flex-col text-left bg-purple-50 p-8 transition-all duration-300"
              role="region"
              aria-labelledby="version-control-heading"
            >
            <video
              src="/videos/PowerUpEngine.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[350px] mb-2 w-[400px] mx-auto rounded-4xl"
              aria-label="Video"
            >
              <track kind="descriptions" label="Video description" />
              Your browser does not support the video tag.
            </video>
              <h3
                id="version-control-heading"
                className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent"
              >
                Power Your Marketing
              </h3>
              <p className="text-gray-600">
                Empower your entire marketing stack with the Twinning Engine.
                Enhance your strategies and optimize performance with ease.
              </p>
              <div className="flex justify-end mt-5">
                <FaArrowRight size={48} className="text-zinc-200 flex" />
              </div>
            </div>{" "}
            <div
              className="group flex flex-col text-left bg-purple-50 p-8 transition-all duration-300"
              role="region"
              aria-labelledby="version-control-heading"
            >
            <video
              src="/labs/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-[350px] mb-2 w-[400px] mx-auto rounded-4xl"
              aria-label="Video"
            >
              <track kind="descriptions" label="Video description" />
              Your browser does not support the video tag.
            </video>
              <h3
                id="version-control-heading"
                className="text-xl font-semibold mb-3 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent"
              >
                Simulate Before Deploying
              </h3>
              <p className="text-gray-600">
                Test your campaigns effectively with the "Simulate before you
                deploy" feature, ensuring smarter and more successful outcomes.
              </p>
              <div className="flex justify-end mt-5">
                <FaArrowRight size={48} className="text-zinc-200 flex" />
              </div>
            </div>
            {/* Card 2 */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTeamsSection;
