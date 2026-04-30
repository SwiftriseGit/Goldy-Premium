"use client";
import HeroSection from "../components/Home/HeroSection";
import LuxurySection from "../components/Home/LuxurySection";
import ExperienceSection from "../components/Home/ExperienceSection";
import QuickCTABlocks from "../components/Home/QuickCTABlocks";
import FeaturedMoments from "../components/Home/FeaturedMoments";
import BanquetHalls from "../components/Home/BanquetHalls";
import GallerySection from "../components/Home/GallerySection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <LuxurySection />
      <ExperienceSection />
      <QuickCTABlocks />
      <FeaturedMoments />
      <BanquetHalls />
      <GallerySection />
    </main>
  );
}