"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChampagneIllustration } from "../Illustrations";

export default function HeroSection() {
  return (
    <motion.section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f29da8c1a1?q=80&w=1170&auto=format&fit=crop"
          alt="Banquet Hall"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <ChampagneIllustration />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
        <ChampagneIllustration />
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Perfect Venue
        </motion.span>
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Banquet <span className="text-[#bfa76a] italic">Halls</span>
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
          Create unforgettable memories in our elegant banquet halls, perfect for weddings, celebrations, and corporate events.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
