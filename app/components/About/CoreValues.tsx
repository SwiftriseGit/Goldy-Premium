"use client";

import { MotionItem, MotionCard } from "../MotionSection";
import { FaHeart, FaAward, FaUsers, FaStar, FaShieldAlt, FaLeaf } from "react-icons/fa";

export default function CoreValues() {
  const values = [
    { icon: <FaHeart />, title: "Passionate Service", desc: "Every interaction stems from genuine care and dedication to your comfort." },
    { icon: <FaAward />, title: "Excellence", desc: "We pursue the highest standards in every detail of your experience." },
    { icon: <FaUsers />, title: "Community", desc: "Building lasting relationships with our guests and the local community." },
    { icon: <FaStar />, title: "Quality", desc: "Premium amenities and services that define true luxury." },
    { icon: <FaShieldAlt />, title: "Integrity", desc: "Honest, transparent, and reliable in all our commitments." },
    { icon: <FaLeaf />, title: "Sustainability", desc: "Responsible practices that respect our environment and future." }
  ];

  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto py-20 px-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-16">
        <MotionItem delay={0}>
          <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">What We Stand For</span>
        </MotionItem>
        <MotionItem delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Our Core Values</h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#bfa76a]/50" />
            <span className="text-[#bfa76a]">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]/50" />
          </div>
        </MotionItem>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, i) => (
          <MotionCard key={i} delay={i * 0.1}>
            <div className="bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full group">
              <motion.div
                className="w-14 h-14 bg-[#732824] rounded-2xl flex items-center justify-center text-[#bfa76a] text-2xl mb-5 group-hover:bg-[#bfa76a] group-hover:text-[#732824] transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="font-serif text-xl font-bold text-[#732824] mb-3">{value.title}</h3>
              <p className="text-[#7c6f57] leading-relaxed">{value.desc}</p>
            </div>
          </MotionCard>
        ))}
      </div>
    </motion.section>
  );
}
