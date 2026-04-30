"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MotionSection, MotionItem } from "../MotionSection";
import { HotelBuildingIllustration } from "../Illustrations";

export default function OurStory() {
  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto py-20 px-4 relative"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <HotelBuildingIllustration className="w-96 h-96" />
      </div>

      <div className="flex flex-col items-center mb-16 relative z-10">
        <MotionItem delay={0}>
          <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Our Journey</span>
        </MotionItem>
        <MotionItem delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3 text-center">Our Story</h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-[#bfa76a]/50" />
            <span className="text-[#bfa76a]">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]/50" />
          </div>
        </MotionItem>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <MotionSection direction="left">
          <div className="relative">
            <motion.div
              className="absolute -inset-4 bg-[#bfa76a]/10 rounded-3xl"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <Image
              src="https://r1imghtlak.mmtcdn.com/5d95c4fc-4eaf-4c69-bed2-a1a3c5cd5dd2.jpg"
              alt="Hotel history"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#732824] text-white p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
            >
              <div className="text-center">
                <div className="text-4xl font-black text-[#bfa76a]">5+</div>
                <div className="text-xs uppercase tracking-wider">Years Excellence</div>
              </div>
            </motion.div>
          </div>
        </MotionSection>

        <MotionSection direction="right" delay={0.2}>
          <div className="space-y-6">
            <p className="text-[#5a4a3a] text-lg leading-relaxed">
              Hotel Goldy Premium opened its doors in 2020 with a vision to redefine luxury hospitality in Jeypore, Odisha. 
              What began as a dream has blossomed into a premier destination known for exceptional service and elegant accommodations.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed">
              Nestled in the heart of Lingaraj Nagar, our hotel combines contemporary comfort with traditional warmth, 
              creating an atmosphere where guests feel genuinely at home while experiencing world-class amenities.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed">
              From intimate gatherings to grand celebrations, Hotel Goldy Premium has been the backdrop for countless 
              precious memories, earning the trust and affection of thousands of guests.
            </p>
          </div>
        </MotionSection>
      </div>
    </motion.section>
  );
}
