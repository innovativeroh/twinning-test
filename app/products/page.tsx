import HeroSection from '@/components/features-page/hero'
import React from 'react'
import Section from '@/components/features-page/section'
import Section2 from '@/components/features-page/section2'
import MultiColumn from '@/components/features-page/multicolumn'
import SingleColumn from '@/components/features-page/singlecolumn'
import Header from '@/components/core/Header'
import Footer from '@/components/core/Footer'
const FeeaturesPage = () => {
  return (
    <main>
        <Header />
        <HeroSection />
        <Section />
        <Section2 />
        <SingleColumn />
        <MultiColumn />
        <Footer />
    </main>
  )
}

export default FeeaturesPage