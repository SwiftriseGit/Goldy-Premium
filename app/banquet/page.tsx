"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { ChampagneIllustration, CrownIllustration, DecorativePattern } from "../components/Illustrations";
import { FaUsers, FaCrown, FaUtensils, FaMusic, FaCamera, FaWifi, FaParking, FaSnowflake, FaGlassCheers } from "react-icons/fa";

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

const events = [
  { title: "Wedding Receptions", image: "https://images.unsplash.com/photo-1519167758481-83f29da8c1a1?q=80&w=1170&auto=format&fit=crop", capacity: "150-300", color: "#732824" },
  { title: "Corporate Events", image: "https://images.unsplash.com/photo-1511795409834-432f7b1728c2?q=80&w=1169&auto=format&fit=crop", capacity: "50-200", color: "#732824" },
  { title: "Birthday Parties", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1170&auto=format&fit=crop", capacity: "30-100", color: "#bfa76a" },
  { title: "Anniversary Celebrations", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1169&auto=format&fit=crop", capacity: "50-150", color: "#4a1a18" }
];

const packages = [
  { name: "Basic Package", price: "₹25,000", features: ["Hall Rental (4 hours)", "Basic Decoration", "Seating Arrangement", "Basic Lighting"], badge: null },
  { name: "Premium Package", price: "₹50,000", features: ["Hall Rental (6 hours)", "Premium Decoration", "Buffet for 100 guests", "Sound & Lighting", "Photography (2 hours)"], badge: "Popular", scale: true },
  { name: "Luxury Package", price: "₹1,00,000", features: ["Hall Rental (Full day)", "Luxury Decoration", "Buffet for 200 guests", "DJ & Sound System", "Photography & Videography", "Valet Parking"], badge: "Premium" }
];

export default function Banquet() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <motion.section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f29da8c1a1?q=80&w=1170&auto=format&fit=crop"
            alt="Banquet Hall"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Decorative Champagne Illustrations */}
        <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
          <ChampagneIllustration />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
          <ChampagneIllustration />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Perfect Venue
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Banquet <span className="text-[#bfa76a] italic">Halls</span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-16 h-px bg-[#bfa76a]" />
            <span className="text-[#bfa76a] text-xl">✦</span>
            <div className="w-16 h-px bg-[#bfa76a]" />
          </motion.div>
          <motion.p
            className="text-white/90 text-lg md:text-xl font-serif max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Create unforgettable memories in our elegant banquet halls, perfect for weddings, celebrations, and corporate events.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Features Section */}
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

      {/* Events Section */}
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

      {/* Packages Section */}
      <motion.section className="w-full relative py-20 bg-linear-to-b from-[#732824] to-[#4a1a18]" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9 }}>
        <div className="absolute inset-0 opacity-5">
          <DecorativePattern />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4">
          <MotionSection direction="up">
            <div className="text-center mb-16">
              <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Pricing</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Event <span className="italic text-[#bfa76a]">Packages</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-[#bfa76a]" />
                <span className="text-[#bfa76a] text-xl">✦</span>
                <div className="w-16 h-px bg-[#bfa76a]" />
              </div>
            </div>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <MotionCard key={i} delay={i * 0.15}>
                <motion.div
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#bfa76a]/30 h-full ${
                    pkg.scale ? "md:scale-105 border-[#bfa76a]" : ""
                  }`}
                  whileHover={{ y: -10 }}
                >
                  {pkg.badge && (
                    <div className="bg-[#bfa76a] text-[#732824] font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
                      {pkg.badge}
                    </div>
                  )}
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-[#bfa76a] text-4xl font-bold mb-6">{pkg.price}</div>
                  <div className="space-y-3">
                    {pkg.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3 text-white/80">
                        <FaGlassCheers className="text-[#bfa76a] mt-1 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
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
    </div>
  );
}
