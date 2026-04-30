"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionCard } from "../MotionSection";
import { FaGlassCheers } from "react-icons/fa";
import { DecorativePattern } from "../Illustrations";

const packages = [
  { name: "Basic Package", price: "₹25,000", features: ["Hall Rental (4 hours)", "Basic Decoration", "Seating Arrangement", "Basic Lighting"], badge: null },
  { name: "Premium Package", price: "₹50,000", features: ["Hall Rental (6 hours)", "Premium Decoration", "Buffet for 100 guests", "Sound & Lighting", "Photography (2 hours)"], badge: "Popular", scale: true },
  { name: "Luxury Package", price: "₹1,00,000", features: ["Hall Rental (Full day)", "Luxury Decoration", "Buffet for 200 guests", "DJ & Sound System", "Photography & Videography", "Valet Parking"], badge: "Premium" }
];

export default function PackagesSection() {
  return (
    <motion.section className="w-full relative py-20 bg-linear-to-b from-[#732824] to-[#4a1a18]" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
      <div className="absolute inset-0 opacity-5">
        <DecorativePattern />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <MotionSection direction="up">
          <div className="text-center mb-16">
            <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Pricing</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Event <span className="italic text-[#bfa76a]">Packages</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#bfa76a]" />
              <span className="text-[#bfa76a] text-xl">✦</span>
              <div className="w-16 h-px bg-[#bfa76a]" />
            </div>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <MotionCard key={i} delay={i * 0.15}>
              <motion.div
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#bfa76a]/30 h-full ${
                  pkg.scale ? "md:scale-105 border-[#bfa76a]" : ""
                }`}
                whileHover={{ y: -10 }}
              >
                {pkg.badge && (
                  <div className="bg-[#bfa76a] text-[#732824] font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-[#bfa76a] text-4xl font-bold mb-6">{pkg.price}</div>
                <div className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3 text-white/80">
                      <FaGlassCheers className="text-[#bfa76a] mt-1 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </MotionCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
