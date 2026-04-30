"use client";

import { MotionItem } from "../MotionSection";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
        <MotionItem delay={0}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Host Your Event?
          </h2>
        </MotionItem>
        <MotionItem delay={0.2}>
          <p className="text-white/80 text-lg mb-8">
            Contact us today to check availability and customize your perfect event package.
          </p>
        </MotionItem>
        <MotionItem delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="bg-[#bfa76a] text-[#732824] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="tel:+918093261999"
              className="bg-transparent border-2 border-white text-white font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "#732824" }}
              whileTap={{ scale: 0.97 }}
            >
              Call Now
            </motion.a>
          </div>
        </MotionItem>
      </div>
    </motion.section>
  );
}
