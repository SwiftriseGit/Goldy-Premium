"use client";
import React from "react";
import { motion } from "framer-motion";
import { MotionSection, MotionItem } from "../MotionSection";
import GalleryGrid from "../GalleryGrid";

export default function GallerySection() {
  return (
    <motion.section
      className="w-full mb-20 bg-[#732824] py-16 px-4"
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Visual Tour</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl font-extrabold text-white mb-3 text-center">Our Gallery</h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-[#bfa76a]/50" />
              <span className="text-[#bfa76a]">✦</span>
              <div className="w-16 h-px bg-[#bfa76a]/50" />
            </div>
          </MotionItem>
          <MotionItem delay={0.25}>
            <p className="text-white/70 text-center max-w-2xl font-serif text-lg leading-relaxed">
              A glimpse into the elegance and comfort that awaits you at Hotel Goldy Premium.
            </p>
          </MotionItem>
        </div>
        <MotionSection direction="scale">
          <GalleryGrid images={[
            {src: "https://images.unsplash.com/photo-1592229505678-cf99a9908e03?q=80&w=1074&auto=format&fit=crop", alt: "Lobby"},
            {src: "https://images.unsplash.com/photo-1560185128-e173042f79dd?q=80&w=1111&auto=format&fit=crop", alt: "Banquet"},
            {src: "https://images.unsplash.com/photo-1612645213559-6af1d4edeaf8?q=80&w=1170&auto=format&fit=crop", alt: "Suite"},
            {src: "https://images.unsplash.com/photo-1746549859840-808544238d42?q=80&w=1170&auto=format&fit=crop", alt: "Room"},
          ]} />
        </MotionSection>
        <MotionItem delay={0.4} className="mt-8 flex justify-center">
          <motion.a
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#bfa76a] text-[#bfa76a] font-bold rounded-full px-8 py-3 tracking-widest uppercase text-sm"
            whileHover={{ backgroundColor: "#bfa76a", color: "#732824", scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            View Full Gallery
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </MotionItem>
      </div>
    </motion.section>
  );
}
