'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  LuSparkles,
  LuCode,
  LuPackage,
  LuUsers,
  LuCloud,
  LuDollarSign,
} from 'react-icons/lu';
import { IconType } from 'react-icons'; 

// Define the type for a single feature item
interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

// Define the colors and their lighter background versions
const featureStyles = [
  { iconColor: '#845EC2', bgColor: '#F3EBFD' },
  { iconColor: '#2C73D2', bgColor: '#E3F2FF' },
  { iconColor: '#008F7A', bgColor: '#E3FBF9' },
  { iconColor: '#FF9671', bgColor: '#FFF6F3' },
  { iconColor: '#D65DB1', bgColor: '#F8EAF6' },
  { iconColor: '#FFC75F', bgColor: '#FFF9E9' },
];

const baseFeatures: Feature[] = [
  {
    icon: LuSparkles,
    title: 'Reduce wasted spend with better suppression',
    description: 'Build custom suppression audiences and actively sync them into advertising platforms to optimize performance.',
  },
  {
    icon: LuCode,
    title: 'Increase ROAS with better conversion signals',
    description: 'Send Conversion API events with rich customer data and conversion values so that the ad platforms can optimize targeting.',
  },
  {
    icon: LuPackage,
    title: 'Expand LTV with win-back, cross-sell, and upsell',
    description: 'Maximize your customer lifetime value by winning back churned customers, cross-selling new products, and upselling your existing customers.',
  },
  {
    icon: LuUsers,
    title: 'Scale successful campaigns with lookalike audiences',
    description: 'Drive more revenue from your existing campaigns by seeding quality lookalike audiences based on your existing high-value customers.',
  },
  {
    icon: LuCloud,
    title: 'Simplify data flow and sync with unified APIs',
    description: 'Connect all your marketing platforms and data sources with a single, streamlined API for seamless data synchronization.',
  },
  {
    icon: LuDollarSign,
    title: 'Track and attribute every dollar with precision',
    description: 'Get a clear view of your return on ad spend by accurately tracking and attributing every conversion and customer action.',
  },
];

const features = [...baseFeatures, ...baseFeatures];

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-purple-50 text-black py-20 px-5 flex flex-col items-center font-sans">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 font-MessinaSans">
        Solve real problems, fast
      </h2>
      <div className="w-full">
        <Marquee
          gradient={false}
          pauseOnHover={true}
          className="py-4"
        >
          {features.map((feature, index) => {
            const { iconColor, bgColor } = featureStyles[index % featureStyles.length];
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col justify-between min-h-[220px] 
                  flex-shrink-0 mx-4
                  w-[320px]"
              >
                <div className="flex flex-col items-start pb-5">
                  <div
                    className="rounded-full p-3 mb-4"
                    style={{ backgroundColor: bgColor }}
                  >
                    <IconComponent size={28} color={iconColor} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 leading-tight font-MessinaSans">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-montserrat">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default FeatureSection;