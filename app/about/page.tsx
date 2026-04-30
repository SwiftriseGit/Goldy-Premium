"use client";

import HeroSection from "../components/About/HeroSection";
import OurStory from "../components/About/OurStory";
import MissionVision from "../components/About/MissionVision";
import CoreValues from "../components/About/CoreValues";
import WhyChooseUs from "../components/About/WhyChooseUs";
import CTASection from "../components/About/CTASection";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <HeroSection />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
