"use client";

import { motion } from "framer-motion";
import { MotionItem } from "../MotionSection";

export default function CTASection() {
  return (
    <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <MotionItem delay={0}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Want to Experience It Yourself?</h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <p className="text-white/80 text-lg mb-8">Book your stay and create your own beautiful memories at Hotel Goldy Premium.</p>
        </MotionItem>
        <MotionItem delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/rooms"
              className="bg-[#bfa76a] text-[#732824] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.97 }}
            >
              View Rooms
            </motion.a>
            <motion.a
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "#732824" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.a>
          </div>
        </MotionItem>
      </div>
    </motion.section>
  );
}
