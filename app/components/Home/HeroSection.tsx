"use client";
import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBed, FaGlassCheers, FaHotel } from "react-icons/fa";

const ParticleField = dynamic(() => import("../ParticleField"), { ssr: false });

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={heroRef}
      className="relative w-full h-screen min-h-[500px] sm:min-h-155 max-h-225 flex items-center justify-center overflow-hidden mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/673469865.jpg?k=838e6a0fa4b205f48604f81264865ca2dae12a42b222a3f41a4b90cfa205876c&o="
          alt="Hotel Goldy Premium"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/65 via-black/40 to-black/75" />

      <ParticleField />

      <motion.div
        className="absolute top-22 left-1/2 -translate-x-1/2 h-0.5 bg-[#bfa76a] z-20 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 0.8 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 text-center"
        style={{ opacity: heroOpacity }}
      >
        {/* Heading */}
        <motion.h1
          className="font-serif font-black text-white text-5xl sm:text-7xl md:text-8xl leading-tight mb-4 drop-shadow-2xl"
          style={{ letterSpacing: "0.04em" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Unwind <span className="text-[#bfa76a] italic">in</span> Style
        </motion.h1>

        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="w-16 sm:w-24 h-px bg-[#bfa76a]/60" />
          <span className="text-[#bfa76a] text-lg">✦</span>
          <div className="w-16 sm:w-24 h-px bg-[#bfa76a]/60" />
        </motion.div>

        <motion.p
          className="text-white/80 text-base sm:text-xl md:text-2xl font-serif max-w-xl sm:max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          Luxury, comfort, and unforgettable experiences await you.
          <br className="hidden sm:block" /> Let your journey begin here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="/rooms"
            className="bg-[#732824] text-white font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg shadow-xl tracking-wider uppercase border-2 border-transparent"
            whileHover={{ scale: 1.05, backgroundColor: "#bfa76a", borderColor: "#bfa76a" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Explore Rooms
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-transparent border-2 border-[#bfa76a] text-[#bfa76a] font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg shadow-xl tracking-wider uppercase"
            whileHover={{ scale: 1.05, backgroundColor: "#bfa76a", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Book Now
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            { icon: <FaBed size={20} />, label: "Luxury Rooms" },
            { icon: <FaGlassCheers size={20} />, label: "Banquet Hall" },
            { icon: <FaHotel size={20} />, label: "5-Star Service" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
              whileHover={{ scale: 1.12 }}
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-[#bfa76a]/60 text-[#bfa76a] backdrop-blur-sm shadow">
                {item.icon}
              </span>
              <span className="text-white/70 text-xs tracking-widest uppercase">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-linear-to-b from-[#bfa76a] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" height="60">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FEFAE0"/>
        </svg>
      </div>
    </motion.section>
  );
}
