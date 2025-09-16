"use client"
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import FAQSection from "@/components/landing-section/Faq";
import HeroSection from "@/components/landing-section/hero";
import TheProblem from "@/components/landing-section/TheProblem";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <FAQSection />
      <Footer /> 
    </main>
  );
};

export default HomePage;
