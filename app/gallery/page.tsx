"use client";

import { useState } from "react";
import HeroSection from "../components/Gallery/HeroSection";
import FilterButtons from "../components/Gallery/FilterButtons";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import ResultsCount from "../components/Gallery/ResultsCount";
import CTASection from "../components/Gallery/CTASection";

const categories = ["All", "Rooms", "Hotel", "Bathrooms", "Wedding", "Flowers"];

const images = {
  Rooms: [
    "/img1.jpg",
    "/img3.jpg",
    "/img7.jpg",
    "/img11.jpg",
    "/img6.jpg",
    "/img5.jpg"
  ],
  Hotel: [
    "/img14.jpg",
    "/img9.jpg",
    "/img12.jpg",
    "/img4.jpg"
  ],
  Bathrooms: [
    "/img8.jpg",
    "https://plus.unsplash.com/premium_photo-1733514433307-f337be80b0f4?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1686316980239-935d5ccba3ef?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675744019180-8c7cda9af3e2?q=80&w=1170&auto=format&fit=crop"
  ],
  Wedding: [
    "https://images.unsplash.com/photo-1639945506968-3dea2042c861?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661317241247-08599f9869ca?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1706182985081-8a82d4156d7e?q=80&w=1169&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1669198876377-f38260abe500?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1682092029189-ec5d08a8dbdd?q=80&w=1170&auto=format&fit=crop"
  ],
  Flowers: [
    "https://images.unsplash.com/photo-1652540795425-e884e5747607?q=80&w=1110&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515051124667-90dabc5aff59?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1682098435089-21d9dbb67fcd?q=80&w=1169&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1700581724273-33cbe88da487?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1769871947521-a9a36f6bdbda?q=80&w=1152&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1700581724273-33cbe88da487?q=80&w=1170&auto=format&fit=crop"
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
