"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CrownIllustration } from "../Illustrations";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.jdmagicbox.com/v2/comp/jeypore/d4/9999p6854.6854.250821142753.d1d4/catalogue/f7vwsj0ezxmeg8e-45nb3wy867.jpg"
          alt="Hotel exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-30">
        <CrownIllustration className="w-20 h-20" />
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
          Since 2020
        </motion.span>
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          About <span className="text-[#bfa76a] italic">Hotel Goldy Premium</span>
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
          Where luxury meets tradition, and every moment becomes a cherished memory.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/70 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-[#bfa76a] to-transparent" />
      </motion.div>
    </section>
  );
}
