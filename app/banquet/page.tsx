"use client";

import HeroSection from "../components/Banquet/HeroSection";
import FeaturesSection from "../components/Banquet/FeaturesSection";
import EventsSection from "../components/Banquet/EventsSection";
import PackagesSection from "../components/Banquet/PackagesSection";
import CTASection from "../components/Banquet/CTASection";

export default function Banquet() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <PackagesSection />
      <CTASection />
    </div>
  );
}
