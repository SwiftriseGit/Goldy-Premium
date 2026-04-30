"use client";
import React from "react";
import { motion } from "framer-motion";
// Inline section header used instead of AboutSections export
import { MotionItem } from "../MotionSection";
import BanquetCard from "../BanquetCard";

export default function BanquetHalls() {
  return (
    <motion.section
      className="w-full mb-20 max-w-6xl mx-auto px-4 relative"
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex flex-col items-center mb-12">
        <MotionItem delay={0}>
          <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Events & Celebrations</span>
        </MotionItem>
        <MotionItem delay={0.1}>
          <h2 className="font-serif text-4xl font-extrabold text-[#732824] mb-3 text-center">Banquet Halls</h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[#bfa76a]/50" />
            <span className="text-[#bfa76a]">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]/50" />
          </div>
        </MotionItem>
      </div>
      <MotionItem delay={0.15}>
        <p className="text-[#7c6f57] text-center max-w-2xl mx-auto font-serif text-lg leading-relaxed mb-10">
          Host your special events in our elegant banquet halls—perfect for weddings, conferences, and celebrations.
        </p>
      </MotionItem>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Grand Ballroom", capacity: "300", features: ["Stage","AV System","Catering"], image: "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?q=80&w=1221&auto=format&fit=crop" },
          { title: "Royal Hall", capacity: "150", features: ["Dance Floor","Bar","Lighting"], image: "https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=1170&auto=format&fit=crop" },
          { title: "Emerald Lounge", capacity: "100", features: ["Private Bar","Lounge Seating","Ambient Lighting"], image: "https://plus.unsplash.com/premium_photo-1678398381832-21d55102a4ae?q=80&w=1170&auto=format&fit=crop" },
          { title: "Skyline Terrace", capacity: "80", features: ["Open Air","City View","Live Music"], image: "https://plus.unsplash.com/premium_photo-1678652647092-377ba6009daa?q=80&w=1171&auto=format&fit=crop" },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <BanquetCard title={card.title} capacity={card.capacity} features={card.features} image={card.image} />
          </motion.div>
        ))}
      </div>
      <MotionItem delay={0.3} className="mt-8 flex justify-center">
        <motion.a
          href="/banquet"
          className="inline-flex items-center gap-2 border-2 border-[#732824] text-[#732824] font-bold rounded-full px-8 py-3 tracking-widest uppercase text-sm"
          whileHover={{ backgroundColor: "#732824", color: "#ffffff", scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          View All Halls
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.a>
      </MotionItem>
    </motion.section>
  );
}
