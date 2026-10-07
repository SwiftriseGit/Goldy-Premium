"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionItem } from "../MotionSection";

export default function MapSection() {
  return (
    <motion.section className="w-full bg-white py-16" initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Find Us</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl font-extrabold text-[#732824] mb-3">Our Location</h2>
          </MotionItem>
        </div>

        <MotionSection direction="scale">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#bfa76a]/20">
            <iframe
              src="https://maps.google.com/maps?q=18.873985290527344,82.56144714355469&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Goldy Premium Location"
            />
          </div>
        </MotionSection>
      </div>
    </motion.section>
  );
}
