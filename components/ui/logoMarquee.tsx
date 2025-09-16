// components/LogoMarquee.tsx
"use client";

import React from "react";
import Image from "next/image";

// Define the type for a logo object
type Logo = {
  src: string;
  alt: string;
};

// A simple array of logo data
const logos: Logo[] = [
  { src: "/icons/1.png", alt: "Logo 1" },
  { src: "/icons/2.png", alt: "Logo 2" },
  { src: "/icons/3.png", alt: "Logo 3" },
  { src: "/icons/4.png", alt: "Logo 4" },
  { src: "/icons/5.png", alt: "Logo 5" },
  { src: "/icons/6.png", alt: "Logo 6" },
  { src: "/icons/7.png", alt: "Logo 7" },
  { src: "/icons/8.png", alt: "Logo 8" },
  { src: "/icons/9.png", alt: "Logo 9" },
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden pb-5">
      <div className="flex animate-scroll">
        {/* First set */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className="flex-shrink-0 px-8 py-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              className="w-[80px] h-[80px]"
            />
          </div>
        ))}
        {/* Second set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className="flex-shrink-0 px-8 py-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              className="w-[80px] h-[80px]"
            />
          </div>
        ))}
        {/* Third set to ensure smooth transition */}
        {logos.map((logo, index) => (
          <div key={`third-${index}`} className="flex-shrink-0 px-8 py-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              className="w-[80px] h-[80px]"
            />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: calc(300% + 1px);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// // Define the type for a logo object
// type Logo = {
//   src: string;
//   alt: string;
// };

// // A simple array of logo data
// const logos: Logo[] = [
//   { src: "/icons/1.png", alt: "Logo 1" },
//   { src: "/icons/2.png", alt: "Logo 2" },
//   { src: "/icons/3.png", alt: "Logo 3" },
//   { src: "/icons/4.png", alt: "Logo 4" },
//   { src: "/icons/5.png", alt: "Logo 5" },
//   { src: "/icons/6.png", alt: "Logo 6" },
//   { src: "/icons/7.png", alt: "Logo 7" },
//   { src: "/icons/8.png", alt: "Logo 8" },
//   { src: "/icons/9.png", alt: "Logo 9" },
// ];

// export function LogoMarquee() {
//   const autoplayOptions = useRef({
//     delay: 3000,
//     stopOnInteraction: false,
//     stopOnMouseEnter: true,
//   });

//   // Use the useEmblaCarousel hook without importing a separate type.
//   // The 'emblaApi' variable will be correctly typed by TypeScript.
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       dragFree: true,
//       containScroll: "keepSnaps",
//     },
//     [Autoplay(autoplayOptions.current)]
//   );

//   return (
//     <div className="embla w-full overflow-hidden pb-5">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container flex">
//           {logos.map((logo, index) => (
//             <div key={index} className="embla__slide flex-shrink-0 px-2 py-2">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={180}
//                 height={180}
//                 // layout="responsive" is deprecated in favor of fill
//                 // objectFit is now replaced by object-fit in tailwind or CSS
//                 style={{ objectFit: "contain" }}
//                 className="w-[80px] h-[80px]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>