"use client";

import { motion } from "framer-motion";
import { MotionItem, MotionCard } from "../MotionSection";
import { FaShieldAlt, FaStar } from "react-icons/fa";

export default function MissionVision() {
  return (
    <motion.section 
      className="w-full bg-linear-to-b from-[#732824] to-[#4a1a18] py-20 relative overflow-hidden"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(circle, #bfa76a 1px, transparent 1px)", backgroundSize: "30px 30px"}} />
      
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">What Drives Us</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-3">Mission & Vision</h2>
          </MotionItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionCard delay={0}>
            <div className="bg-white/10 backdrop-blur-sm border border-[#bfa76a]/30 rounded-3xl p-10 h-full">
              <div className="w-16 h-16 bg-[#bfa76a]/20 rounded-2xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-[#bfa76a] text-3xl" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#bfa76a] mb-4">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To provide unparalleled hospitality that exceeds expectations, creating memorable experiences 
                through personalized service, attention to detail, and a commitment to excellence in every interaction.
              </p>
            </div>
          </MotionCard>

          <MotionCard delay={0.15}>
            <div className="bg-white/10 backdrop-blur-sm border border-[#bfa76a]/30 rounded-3xl p-10 h-full">
              <div className="w-16 h-16 bg-[#bfa76a]/20 rounded-2xl flex items-center justify-center mb-6">
                <FaStar className="text-[#bfa76a] text-3xl" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#bfa76a] mb-4">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To be the most cherished luxury destination in Eastern India, recognized for setting new standards 
                in hospitality, sustainable practices, and creating lasting memories for generations to come.
              </p>
            </div>
          </MotionCard>
        </div>
      </div>
    </motion.section>
  );
}
