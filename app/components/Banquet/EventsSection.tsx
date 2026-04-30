"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MotionSection, MotionCard } from "../MotionSection";
import { FaUsers } from "react-icons/fa";

const events = [
  { title: "Wedding Receptions", image: "https://images.unsplash.com/photo-1519167758481-83f29da8c1a1?q=80&w=1170&auto=format&fit=crop", capacity: "150-300", color: "#732824" },
  { title: "Corporate Events", image: "https://images.unsplash.com/photo-1511795409834-432f7b1728c2?q=80&w=1169&auto=format&fit=crop", capacity: "50-200", color: "#732824" },
  { title: "Birthday Parties", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1170&auto=format&fit=crop", capacity: "30-100", color: "#bfa76a" },
  { title: "Anniversary Celebrations", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1169&auto=format&fit=crop", capacity: "50-150", color: "#4a1a18" }
];

export default function EventsSection() {
  return (
    <motion.section className="w-full max-w-7xl mx-auto py-20 px-4" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
      <MotionSection direction="up">
        <div className="text-center mb-16">
          <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Versatile Spaces</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#732824] mt-4 mb-4">
            Perfect for Every <span className="italic text-[#bfa76a]">Occasion</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-[#bfa76a]" />
            <span className="text-[#bfa76a] text-xl">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]" />
          </div>
        </div>
      </MotionSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <MotionCard key={i} delay={i * 0.15}>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-80">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  className="w-16 h-1 mb-4"
                  style={{ backgroundColor: event.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <h3 className="font-serif text-3xl font-bold text-white mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-[#bfa76a]">
                  <FaUsers />
                  <span className="font-semibold">Capacity: {event.capacity} Guests</span>
                </div>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </motion.section>
  );
}
