"use client";

import { motion } from "framer-motion";
import { MotionSection } from "../MotionSection";

export default function FilterButtons({ categories, activeCategory, setActiveCategory }: {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}) {
  return (
    <motion.section className="w-full max-w-7xl mx-auto py-12 px-4" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <MotionSection direction="scale">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold tracking-wider uppercase transition-all ${
                activeCategory === category
                  ? "bg-[#732824] text-white shadow-lg"
                  : "bg-white border-2 border-[#bfa76a]/30 text-[#732824] hover:border-[#bfa76a]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </MotionSection>
    </motion.section>
  );
}
