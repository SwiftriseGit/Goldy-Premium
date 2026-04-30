"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionCard } from "../MotionSection";
import { FaUsers, FaCrown, FaUtensils, FaMusic, FaCamera, FaWifi, FaParking, FaSnowflake } from "react-icons/fa";

const banquetFeatures = [
  { icon: FaUsers, title: "Spacious Halls", description: "Accommodate up to 300 guests comfortably" },
  { icon: FaCrown, title: "Premium Decor", description: "Elegant decoration and ambiance" },
  { icon: FaUtensils, title: "Catering Services", description: "Multi-cuisine buffet and custom menus" },
  { icon: FaMusic, title: "Sound System", description: "Professional audio and lighting setup" },
  { icon: FaCamera, title: "Photography", description: "Capture your special moments" },
  { icon: FaWifi, title: "High-Speed WiFi", description: "Stay connected throughout the event" },
  { icon: FaParking, title: "Valet Parking", description: "Convenient parking for all guests" },
  { icon: FaSnowflake, title: "Climate Control", description: "Central AC for year-round comfort" }
];

export default function FeaturesSection() {
  return (
    <motion.section className="w-full max-w-7xl mx-auto py-20 px-4" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
      <MotionSection direction="up">
        <div className="text-center mb-16">
          <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Premium Facilities</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#732824] mt-4 mb-4">
            World-Class <span className="italic text-[#bfa76a]">Features</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#bfa76a]" />
            <span className="text-[#bfa76a] text-xl">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]" />
          </div>
        </div>
      </MotionSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {banquetFeatures.map((feature, i) => (
          <MotionCard key={i} delay={i * 0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full border-2 border-[#bfa76a]/20 hover:border-[#bfa76a] transition-all">
              <motion.div
                className="w-14 h-14 bg-linear-to-b from-[#732824] to-[#732824] rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-[#bfa76a] text-2xl" />
              </motion.div>
              <h3 className="font-serif text-xl font-bold text-[#732824] mb-2">{feature.title}</h3>
              <p className="text-[#7c6f57]">{feature.description}</p>
            </div>
          </MotionCard>
        ))}
      </div>
    </motion.section>
  );
}
