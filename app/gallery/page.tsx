"use client";

import { useState } from "react";
import HeroSection from "../components/Gallery/HeroSection";
import FilterButtons from "../components/Gallery/FilterButtons";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import ResultsCount from "../components/Gallery/ResultsCount";
import CTASection from "../components/Gallery/CTASection";

const categories = ["All", "Rooms", "Hotel"];

const images = {
  Rooms: [
    "/img1.jpg",
    "/img3.jpg",
    "/img7.jpg",
    "/img11.jpg",
    "/img6.jpg",
    "/img5.jpg",
    "/WhatsApp Image 2026-10-06 at 9.58.07 AM (1).jpeg",
    "/WhatsApp Image 2026-10-06 at 9.58.07 AM.jpeg",
  ],
  Hotel: [
    "/img12.jpg",
    "/img4.jpg",
    "/WhatsApp Image 2026-10-06 at 9.58.08 AM.jpeg",
    "/WhatsApp Image 2026-10-06 at 9.58.08 AM (1).jpeg",
    "/WhatsApp Image 2026-10-06 at 9.58.08 AM (2).jpeg",
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const getAllImages = () => {
    return Object.entries(images).flatMap(([category, imgs]) =>
      imgs.map((src, i) => ({ src, category, id: `${category}-${i}` }))
    );
  };

  const filteredImages = activeCategory === "All"
    ? getAllImages()
    : getAllImages().filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      <HeroSection />
      <FilterButtons categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <section className="w-full max-w-7xl mx-auto py-4 px-4">
        <GalleryGrid images={filteredImages} />
        <ResultsCount count={filteredImages.length} activeCategory={activeCategory} />
      </section>
      <CTASection />
    </div>
  );
}
