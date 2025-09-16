import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChartLine, FaUsers, FaVideo, 
  FaHeart, FaEnvelope, FaGlobe, 
  FaDollarSign, FaBullseye, FaBolt, 
  FaFlask, FaChartBar, FaSearch, 
  FaArrowRight
} from "react-icons/fa";

const tabs = [
  { id: "howItWorks", label: "How It Works" },
  { id: "lifecycle", label: "Lifecycle Marketing" },
  { id: "experimentation", label: "Experimentation" },
];

// Map colors to Tailwind background classes
const colorMap = {
  purple: { bg: "bg-purple-100", text: "text-purple-500" },
  blue: { bg: "bg-blue-100", text: "text-blue-500" },
  teal: { bg: "bg-teal-100", text: "text-teal-500" },
  pink: { bg: "bg-pink-100", text: "text-pink-500" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-500" },
  green: { bg: "bg-green-100", text: "text-green-500" },
  orange: { bg: "bg-orange-100", text: "text-orange-500" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-500" },
  rose: { bg: "bg-rose-100", text: "text-rose-500" },
};

const cardContent = {
  howItWorks: [
    {
      icon: FaChartLine,
      color: "purple",
      title: "Collect Data",
      description: "Integrate customer data from all touchpoints to build a unified view for actionable insights.",
    },
    {
      icon: FaUsers,
      color: "blue",
      title: "Build Twins",
      description: "Create digital replicas of target audiences for precise and scalable marketing strategies.",
    },
    {
      icon: FaVideo,
      color: "teal",
      title: "Simulate Ads",
      description: "Test unlimited creative variations virtually to optimize campaigns before launch.",
    },
  ],
  lifecycle: [
    {
      icon: FaHeart,
      color: "pink",
      title: "Build a personalized loyalty program",
      description: "Craft loyalty programs with data-driven offers and messages tailored to each customer.",
    },
    {
      icon: FaEnvelope,
      color: "yellow",
      title: "Personalize messages with product catalogs",
      description: "Leverage data science and catalogs for next-best-action recommendations.",
    },
    {
      icon: FaGlobe,
      color: "blue",
      title: "Power omni-channel campaigns",
      description: "Deliver consistent experiences across channels with centralized audience management.",
    },
  ],
  paid: [
    {
      icon: FaDollarSign,
      color: "green",
      title: "Optimize ad spend",
      description: "Maximize ROI with data-driven targeting and real-time performance analytics.",
    },
    {
      icon: FaBullseye,
      color: "purple",
      title: "Targeted campaigns",
      description: "Reach the right audience with precision using advanced segmentation tools.",
    },
    {
      icon: FaBolt,
      color: "orange",
      title: "Real-time bidding",
      description: "Automate ad placements with AI-powered bidding for optimal efficiency.",
    },
  ],
  experimentation: [
    {
      icon: FaFlask,
      color: "teal",
      title: "A/B testing",
      description: "Run controlled experiments to identify the most effective campaign strategies.",
    },
    {
      icon: FaChartBar,
      color: "indigo",
      title: "Performance tracking",
      description: "Monitor key metrics and iterate quickly with real-time analytics dashboards.",
    },
    {
      icon: FaSearch,
      color: "rose",
      title: "Customer insights",
      description: "Uncover deep behavioral insights to refine and enhance marketing approaches.",
    },
  ],
};

const MarketingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("howItWorks");

  return (
    <section className="py-40 px-6 text-center">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-8"
        >
          Certainty starts with simulation. 
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 flex items-center gap-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-zinc-950 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label} <FaArrowRight />
            </motion.button>
          ))}
        </div>

        {/* Content cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {cardContent[activeTab as keyof typeof cardContent].map((card, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4`}
                >
                  <card.icon className={`text-purple-800 text-1xl`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                <a
                  href="#"
                  className="text-zinc-900 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn more <span className="ml-1">→</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MarketingSection;