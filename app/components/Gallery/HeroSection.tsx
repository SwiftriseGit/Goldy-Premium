"use client";

import { motion } from "framer-motion";
import { FaCameraRetro } from "react-icons/fa";

export default function HeroSection() {
  return (
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
  );
}
