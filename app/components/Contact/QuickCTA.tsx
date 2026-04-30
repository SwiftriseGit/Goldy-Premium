"use client";

import { motion } from "framer-motion";
import { MotionItem } from "../MotionSection";
import { FaPhoneAlt } from "react-icons/fa";

export default function QuickCTA() {
  return (
    <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <MotionItem delay={0}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <p className="text-white/80 text-lg mb-8">
            Our team is available 24/7 to help with reservations, special requests, and any questions.
          </p>
        </MotionItem>
        <MotionItem delay={0.4}>
          <motion.a
            href="tel:91 89849 09990"
            className="inline-flex items-center gap-3 bg-[#bfa76a] text-[#732824] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaPhoneAlt />
            Call Now: +91-8093261999
          </motion.a>
        </MotionItem>
      </div>
    </motion.section>
  );
}
