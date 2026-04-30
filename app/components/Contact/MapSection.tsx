"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionItem } from "../MotionSection";

export default function MapSection() {
  return (
    <motion.section className="w-full bg-white py-16" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.198445846959!2d82.57283631487653!3d19.35274298694516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2cf2a1e8dd91e9%3A0x75c4e4a8aa9c66bf!2sLingaraj%20Nagar%2C%20Jeypore%2C%20Odisha%20764002!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
