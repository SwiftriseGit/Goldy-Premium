"use client";
import React from "react";
import { motion } from "framer-motion";
import { MotionCard } from "../MotionSection";
import { FaBed, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { BedIllustration, ChampagneIllustration, ServiceBellIllustration } from "../Illustrations";

export default function QuickCTABlocks() {
  return (
    <motion.section
      className="w-full max-w-6xl mx-auto mb-20 px-4 relative"
      initial={{ opacity: 0, y: 20, scale: 0.98, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="absolute top-0 left-0 opacity-15 pointer-events-none">
        <ServiceBellIllustration className="w-32 h-32" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none">
        <BedIllustration className="w-32 h-32" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {[
          { href: '/rooms', icon: <FaBed size={36} />, title: 'Luxury Rooms', desc: 'Explore our curated collection of suites crafted for your comfort.', cta: 'View Rooms', illustration: <BedIllustration className="w-full h-32 mb-4" /> },
          { href: 'https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Goldy%20Premium.', icon: <FaWhatsapp size={36} />, title: 'Book via WhatsApp', desc: 'Instantly connect with us on WhatsApp to reserve your room.', cta: 'Book Now', illustration: <ChampagneIllustration className="w-full h-32 mb-4" />, external: true },
          { href: '/contact', icon: <FaPhoneAlt size={36} />, title: 'Get In Touch', desc: 'Our team is available 24/7 to assist with any inquiry.', cta: 'Contact Us', illustration: <ServiceBellIllustration className="w-full h-32 mb-4" /> },
        ].map((item, i) => (
          <MotionCard key={i} delay={i * 0.15}>
            <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group relative overflow-hidden flex flex-col items-center text-center bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="w-16 h-16 rounded-2xl bg-[#732824]/5 flex items-center justify-center text-[#bfa76a] mb-5 shadow"
                whileHover={{ backgroundColor: "#732824", color: "#ffffff", rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-serif text-xl font-bold text-[#732824] mb-2">{item.title}</h3>
              <p className="text-[#7c6f57] text-sm mb-5 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[#bfa76a] font-bold text-xs tracking-widest uppercase">
                {item.cta}
                <motion.svg
                  width="14" height="14" viewBox="0 0 16 16" fill="none"
                  whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </span>
            </a>
          </MotionCard>
        ))}
      </div>
    </motion.section>
  );
}
