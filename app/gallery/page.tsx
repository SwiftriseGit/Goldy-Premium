"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionItem } from "../components/MotionSection";
import { FaCameraRetro } from "react-icons/fa";

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
      {/* Hero Section */}
      <motion.section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-[#732824] to-[#4a1a18]" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(circle, #bfa76a 1px, transparent 1px)", backgroundSize: "30px 30px"}} />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaCameraRetro className="text-2xl" />
            Visual Journey
          </motion.div>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our <span className="text-[#bfa76a] italic">Gallery</span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-16 h-px bg-[#bfa76a]" />
            <span className="text-[#bfa76a] text-xl">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]" />
          </motion.div>
          <motion.p
            className="text-white/90 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore our beautiful spaces, elegant details, and memorable moments captured in time.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Filter Categories */}
      <motion.section className="w-full max-w-7xl mx-auto py-12 px-4" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <MotionSection direction="scale">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? "bg-[#732824] text-white shadow-lg"
                    : "bg-white border-2 border-[#bfa76a]/30 text-[#732824] hover:border-[#bfa76a]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </MotionSection>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredImages.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
              whileHover={{ y: -8 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`${item.category} ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                <motion.div
                  className="w-full h-1 bg-[#bfa76a] mb-3"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <FaCameraRetro className="text-[#bfa76a] text-2xl mb-2" />
                <span className="text-white font-semibold text-lg">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        <MotionItem delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-[#7c6f57] font-serif text-lg">
              Showing {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </div>
        </MotionItem>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Experience It Yourself?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8">
              Book your stay and create your own beautiful memories at Hotel Goldy Premium.
            </p>
          </MotionItem>
          <MotionItem delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/rooms"
                className="bg-[#bfa76a] text-[#732824] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
              >
                View Rooms
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#732824" }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.a>
            </div>
          </MotionItem>
        </div>
      </motion.section>
    </div>
  );
}
