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
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1157&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1734549547895-1901eeace834?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1736194024175-b5e553effe21?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1689609949898-5f7a10649fef?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1736194029441-251abe24932b?q=80&w=1170&auto=format&fit=crop"
  ],
  Hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960116574-782d09070294?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960116553-52e1b0cbb071?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1687960116836-0eb19ff4fcca?q=80&w=1170&auto=format&fit=crop"
  ],
  Bathrooms: [
    "https://images.unsplash.com/photo-1763485956070-431fca7bc030?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621420621125-c63db35851cb?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1663091257768-8f089bf6b4fa?q=80&w=1170&auto=format&fit=crop",
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
