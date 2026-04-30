"use client";
import React from "react";
import { motion } from "framer-motion";
import { MotionItem, MotionSection, CountUp } from "../MotionSection";
import { DecorativePattern, CrownIllustration, HotelBuildingIllustration } from "../Illustrations";
import { FaHotel } from "react-icons/fa";

export default function LuxurySection() {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto mb-20 mt-10 px-4 relative"
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        <DecorativePattern className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center mb-12 relative z-10">
        <MotionItem delay={0}>
          <div className="flex items-center gap-3 mb-3">
            <CrownIllustration className="w-10 h-10" />
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold block">Discover Our Story</span>
            <CrownIllustration className="w-10 h-10" />
          </div>
        </MotionItem>
        <MotionItem delay={0.1}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[#bfa76a]/50" />
            <span className="text-[#bfa76a] text-base">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]/50" />
          </div>
        </MotionItem>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-12 relative z-10">
        <MotionSection direction="left" className="flex-1 flex flex-col justify-center relative px-2 sm:px-0">
          <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none hidden lg:block">
            <HotelBuildingIllustration className="w-64 h-64" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-6 leading-snug">
            Experience the Fusion of <span className="text-[#bfa76a] italic">Luxury</span> and Culinary Mastery
          </h2>
          <div className="w-16 h-1 bg-[#bfa76a] rounded mb-6" />
          <p className="text-[#5a4a3a] text-lg mb-4 leading-relaxed">
            We take care of your comfort so that you can get luxury service. A variety of rooms are available here with all types of modern amenities.
          </p>
          <p className="text-[#5a4a3a] text-lg mb-8 leading-relaxed">
            We truly care about you and your well-being. Your comfort is of paramount importance to us. Any special meal requirements can be prepared especially for you during your stay.
          </p>
          <div className="flex gap-8 mb-8">
            {[
              { value: "50+", label: "Luxury Rooms" },
              { value: "5★", label: "Star Rating" },
              { value: "10K+", label: "Happy Guests" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center border-r last:border-r-0 border-[#bfa76a]/30 pr-8 last:pr-0"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 }}
              >
                <CountUp value={stat.value} className="text-3xl font-black text-[#732824] font-serif" />
                <span className="text-xs text-[#bfa76a] tracking-widest uppercase mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="/about"
            className="self-start inline-flex items-center gap-2 bg-[#732824] text-white font-bold rounded-full px-8 py-3 shadow-lg tracking-wider uppercase text-sm"
            whileHover={{ scale: 1.05, backgroundColor: "#bfa76a" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            Discover More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </MotionSection>

        <MotionSection direction="right" delay={0.2} className="flex-1 flex justify-center items-center">
          <div className="relative bg-[#732824] rounded-3xl p-6 sm:p-10 flex flex-col items-center shadow-2xl w-full max-w-sm overflow-hidden">
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: "4px solid transparent",
                background: "linear-gradient(120deg, #bfa76a, #ffe9b0, #bfa76a) border-box",
                boxShadow: "0 0 22px 8px #bfa76a, 0 0 64px 16px #ffe9b0"
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #bfa76a 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#bfa76a] rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#bfa76a] rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#bfa76a] rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#bfa76a] rounded-br-3xl" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <motion.div
                className="w-16 h-16 rounded-full bg-[#bfa76a]/20 border-2 border-[#bfa76a] flex items-center justify-center mb-5 shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaHotel size={28} color="#bfa76a" />
              </motion.div>
              <span className="text-[#bfa76a] text-xs tracking-[0.25em] uppercase font-bold mb-2">Hotel Goldy Premium</span>
              <h3 className="text-2xl font-serif font-bold text-white text-center mb-2 leading-snug">Your Haven of Comfort & Elegance</h3>
              <div className="w-10 h-px bg-[#bfa76a] my-4" />
              <p className="text-white/70 text-sm text-center mb-6 leading-relaxed">Reserve your stay and experience world-class hospitality crafted just for you.</p>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-6 border border-[#bfa76a]/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 8h18M14 3l7 7-7 7" stroke="#bfa76a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white font-bold tracking-wider text-sm">+91-8093261999</span>
              </div>
              <motion.a
                href="/contact"
                className="w-full text-center bg-[#bfa76a] text-[#732824] font-black rounded-full px-8 py-3 shadow-lg tracking-widest uppercase text-sm"
                whileHover={{ scale: 1.04, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Make a Reservation
              </motion.a>
            </div>
          </div>
        </MotionSection>
      </div>
    </motion.section>
  );
}
