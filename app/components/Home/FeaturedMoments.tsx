"use client";
import React from "react";
import { motion } from "framer-motion";
import { MotionItem, MotionSection } from "../MotionSection";
import GalleryGrid from "../GalleryGrid";
import { FaCameraRetro } from "react-icons/fa";

export default function FeaturedMoments() {
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
          <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Our Highlights</span>
        </MotionItem>
        <MotionItem delay={0.1}>
          <h2 className="font-serif text-4xl font-extrabold text-[#732824] mb-3 text-center">Featured Moments</h2>
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
          Where elegance meets comfort—every moment is crafted for your delight.
        </p>
      </MotionItem>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { src: 'https://images.unsplash.com/photo-1592229505678-cf99a9908e03?q=80&w=1074&auto=format&fit=crop', title: 'Elegant Lobby', desc: 'Step into a world of luxury and warmth.' },
          { src: 'https://images.unsplash.com/photo-1560185128-e173042f79dd?q=80&w=1111&auto=format&fit=crop', title: 'Grand Banquet', desc: 'Celebrate your finest moments in style.' },
          { src: 'https://images.unsplash.com/photo-1612645213559-6af1d4edeaf8?q=80&w=1170&auto=format&fit=crop', title: 'Premium Suite', desc: 'Classic elegance, modern comfort.' },
          { src: 'https://images.unsplash.com/photo-1746549859840-808544238d42?q=80&w=1170&auto=format&fit=crop', title: 'Sunset Terrace', desc: 'Breathtaking views from our terrace.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <img src={item.src} alt={item.title} className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-[#bfa76a]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <motion.div
                className="flex items-center gap-2 mb-1"
                initial={{ x: -10, opacity: 0.8 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <FaCameraRetro size={14} color="#bfa76a" />
                <h3 className="font-serif font-bold text-white text-lg">{item.title}</h3>
              </motion.div>
              <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
