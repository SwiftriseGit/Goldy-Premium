"use client";
import React from "react";
import { motion } from "framer-motion";
import { MotionSection } from "../MotionSection";
import { AbstractShapes } from "../Illustrations";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <motion.section
      className="w-full max-w-6xl mx-auto mb-20 px-4 relative"
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <AbstractShapes className="w-full h-full" />
      </div>
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 bg-linear-to-br from-[#732824] to-[#4a1a18] rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-14">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #bfa76a 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent" />
        <MotionSection direction="right" className="flex-1 flex flex-col justify-center items-start relative z-10">
          <span className="text-[#bfa76a] text-xs tracking-[0.3em] uppercase font-bold mb-3">Our Promise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-4 leading-snug">
            Experience <span className="text-[#bfa76a] italic">True</span> Comfort
          </h2>
          <div className="w-14 h-1 bg-[#bfa76a] rounded mb-5" />
          <p className="text-white/75 text-lg mb-8 leading-relaxed max-w-xl">
            Our hotel blends modern luxury with classic elegance, offering you a peaceful retreat. Enjoy spacious rooms, world-class amenities, and personalized service.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Free Wi-Fi', 'Room Service', 'Spa & Pool', '24/7 Support'].map((f, i) => (
              <motion.span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-[#bfa76a]/40 text-white/80 text-xs px-4 py-2 rounded-full tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ backgroundColor: "rgba(191,167,106,0.25)", scale: 1.05 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]" />{f}
              </motion.span>
            ))}
          </div>
          <motion.a
            href="/rooms"
            className="inline-flex items-center gap-2 bg-[#bfa76a] text-[#732824] font-black rounded-full px-8 py-3 shadow-lg tracking-widest uppercase text-sm"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Explore Rooms
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </MotionSection>
        <MotionSection direction="left" delay={0.2} className="flex-1 flex justify-center items-center relative z-10">
          <div className="relative">
            <motion.div
              className="absolute -inset-3 rounded-3xl bg-[#bfa76a]/20 blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Image
              src="https://gos3.ibcdn.com/153616f2-9ad6-443a-a28a-a060d5130696.jpg"
              alt="Hotel Comfort"
              width={600} height={400}
              className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-2 border-[#bfa76a]/40"
            />
            <motion.div
              className="absolute -bottom-4 -left-4 bg-[#bfa76a] text-[#732824] rounded-2xl px-5 py-3 shadow-xl font-black text-sm tracking-wider uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              5★ Luxury Hotel
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </motion.section>
  );
}
