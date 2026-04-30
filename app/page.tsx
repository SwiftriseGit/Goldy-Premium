"use client";
import React, { useState, useEffect } from "react";
import { FaBed, FaGlassCheers, FaPhoneAlt, FaHotel, FaCameraRetro } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import BanquetCard from "./components/BanquetCard";
import GalleryGrid from "./components/GalleryGrid";
import { MotionSection, MotionItem, MotionCard, CountUp } from "./components/MotionSection";
import { 
  HotelBuildingIllustration, 
  LuxuryKeyIllustration, 
  ServiceBellIllustration, 
  ChampagneIllustration,
  DecorativePattern,
  AbstractShapes,
  CrownIllustration,
  BedIllustration,
  StarRatingIllustration
} from "./components/Illustrations";

const ParticleField = dynamic(() => import("./components/ParticleField"), { ssr: false });

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <MotionItem delay={0}>
        <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">{label}</span>
      </MotionItem>
      <MotionItem delay={0.1}>
        <h2 className="font-serif text-4xl font-extrabold text-[#732824] mb-3 text-center">{title}</h2>
      </MotionItem>
      <MotionItem delay={0.2}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-[#bfa76a]/50" />
          <span className="text-[#bfa76a]">✦</span>
          <div className="w-16 h-px bg-[#bfa76a]/50" />
        </div>
      </MotionItem>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  // Beautiful Loader State
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Beautiful Loader Overlay - Responsive Centering */}
      <motion.div
        className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-linear-to-br from-[#732824] via-[#8B3A35] to-[#4a1a18] px-4 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }}
        transition={{ duration: 0.8, delay: loading ? 0 : 0.3 }}
      >
        {/* Animated Background Lights */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#bfa76a] opacity-20 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#ffe9b0] opacity-20 blur-[120px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        
        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-md">
          {/* Hotel Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 "
              
            />
            <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
              <Image
                src="/LOGO (1).png"
                alt="Hotel Goldy logo"
                width={280}
                height={280}
                className="w-44 h-44 scale-125 object-contain"
                priority
              />
            </div>
          </motion.div>
          
          {/* Hotel Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl sm:text-4xl font-black text-white mb-2 tracking-wider">Hotel Goldy</h1>
            <p className="text-[#bfa76a] text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">Premium Experience</p>
          </motion.div>
          
          {/* Loading Bar */}
          <div className="w-full max-w-xs sm:max-w-sm h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-linear-to-r from-[#bfa76a] via-[#ffe9b0] to-[#bfa76a] rounded-full shadow-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p
            className="text-white/60 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading luxury experience... {loadingProgress}%
          </motion.p>
        </div>
      </motion.div>
      
      {/* Persistent Animated Orb */}
      <motion.div
        className="fixed top-4 sm:top-8 right-4 sm:right-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#bfa76a] opacity-30 blur-[60px] z-999 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      {/* Persistent Animated Bar at Bottom */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-4 sm:h-6 z-999 pointer-events-none"
        animate={{ background: [
          "linear-gradient(90deg, #bfa76a 0%, #ffe9b0 50%, #bfa76a 100%)",
          "linear-gradient(90deg, #ffe9b0 0%, #bfa76a 50%, #ffe9b0 100%)",
          "linear-gradient(90deg, #bfa76a 0%, #ffe9b0 50%, #bfa76a 100%)"
        ] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ boxShadow: "0 0 32px 8px #bfa76a, 0 0 64px 16px #ffe9b0" }}
      />
      <main className="min-h-screen w-full bg-[#FEFAE0] overflow-x-hidden">

        {/* ── Hero Section ───────────────────────────────────────────────── */}
        <motion.section
          ref={heroRef}
          className="relative w-full h-screen min-h-[500px] sm:min-h-155 max-h-225 flex items-center justify-center overflow-hidden mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Video Background with parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <Image
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/673469865.jpg?k=838e6a0fa4b205f48604f81264865ca2dae12a42b222a3f41a4b90cfa205876c&o="

              // src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hotel Goldy Premium"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>

          {/* Dark gradient */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-black/65 via-black/40 to-black/75" />

          {/* Three.js Particle Field */}
          <ParticleField />

          {/* Gold top line */}
          <motion.div
            className="absolute top-22 left-1/2 -translate-x-1/2 h-0.5 bg-[#bfa76a] z-20 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Content */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 text-center"
            style={{ opacity: heroOpacity }}
          >
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 bg-[#bfa76a]/20 border border-[#bfa76a] text-[#bfa76a] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6 backdrop-blur-sm shadow"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] inline-block animate-pulse" />
              Welcome to Hotel Goldy Premium
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] inline-block animate-pulse" />
            </motion.span>

            {/* Heading */}
            <motion.h1
              className="font-serif font-black text-white text-5xl sm:text-7xl md:text-8xl leading-tight mb-4 drop-shadow-2xl"
              style={{ letterSpacing: "0.04em" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Unwind <span className="text-[#bfa76a] italic">in</span> Style
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="w-16 sm:w-24 h-px bg-[#bfa76a]/60" />
              <span className="text-[#bfa76a] text-lg">✦</span>
              <div className="w-16 sm:w-24 h-px bg-[#bfa76a]/60" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-white/80 text-base sm:text-xl md:text-2xl font-serif max-w-xl sm:max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
            >
              Luxury, comfort, and unforgettable experiences await you.
              <br className="hidden sm:block" /> Let your journey begin here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="/rooms"
                className="bg-[#732824] text-white font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg shadow-xl tracking-wider uppercase border-2 border-transparent"
                whileHover={{ scale: 1.05, backgroundColor: "#bfa76a", borderColor: "#bfa76a" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Explore Rooms
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-transparent border-2 border-[#bfa76a] text-[#bfa76a] font-bold rounded-full px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg shadow-xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: "#bfa76a", color: "#fff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Book Now
              </motion.a>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              className="flex gap-6 sm:gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: <FaBed size={20} />, label: "Luxury Rooms" },
                { icon: <FaGlassCheers size={20} />, label: "Banquet Hall" },
                { icon: <FaHotel size={20} />, label: "5-Star Service" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
                  whileHover={{ scale: 1.12 }}
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-[#bfa76a]/60 text-[#bfa76a] backdrop-blur-sm shadow">
                    {item.icon}
                  </span>
                  <span className="text-white/70 text-xs tracking-widest uppercase">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-10 bg-linear-to-b from-[#bfa76a] to-transparent"
              animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full z-20">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" height="60">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FEFAE0"/>
            </svg>
          </div>
        </motion.section>


        {/* ── Luxury Section ─────────────────────────────────────────────── */}
        <motion.section
          className="w-full max-w-7xl mx-auto mb-20 mt-10 px-4 relative"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
            <DecorativePattern className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center mb-12 relative z-10">
            <MotionItem delay={0}>
              <div className="flex items-center gap-3 mb-3">
                <CrownIllustration className="w-10 h-10" />
                <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold block">Discover Our Story</span>
                <CrownIllustration className="w-10 h-10" />
              </div>
            </MotionItem>
            <MotionItem delay={0.1}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-[#bfa76a]/50" />
                <span className="text-[#bfa76a] text-base">✦</span>
                <div className="w-16 h-px bg-[#bfa76a]/50" />
              </div>
            </MotionItem>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 relative z-10">
            <MotionSection direction="left" className="flex-1 flex flex-col justify-center relative px-2 sm:px-0">
              {/* Hotel Building Illustration */}
              <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none hidden lg:block">
                <HotelBuildingIllustration className="w-64 h-64" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-6 leading-snug">
                Experience the Fusion of <span className="text-[#bfa76a] italic">Luxury</span> and Culinary Mastery
              </h2>
              <div className="w-16 h-1 bg-[#bfa76a] rounded mb-6" />
              <p className="text-[#5a4a3a] text-lg mb-4 leading-relaxed">
                We take care of your comfort so that you can get luxury service. A variety of rooms are available here with all types of modern amenities.
              </p>
              <p className="text-[#5a4a3a] text-lg mb-8 leading-relaxed">
                We truly care about you and your well-being. Your comfort is of paramount importance to us. Any special meal requirements can be prepared especially for you during your stay.
              </p>
              <div className="flex gap-8 mb-8">
                {[
                  { value: "50+", label: "Luxury Rooms" },
                  { value: "5★", label: "Star Rating" },
                  { value: "10K+", label: "Happy Guests" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center border-r last:border-r-0 border-[#bfa76a]/30 pr-8 last:pr-0"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                  >
                    <CountUp value={stat.value} className="text-3xl font-black text-[#732824] font-serif" />
                    <span className="text-xs text-[#bfa76a] tracking-widest uppercase mt-1">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="/about"
                className="self-start inline-flex items-center gap-2 bg-[#732824] text-white font-bold rounded-full px-8 py-3 shadow-lg tracking-wider uppercase text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#bfa76a" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                Discover More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
            </MotionSection>

            <MotionSection direction="right" delay={0.2} className="flex-1 flex justify-center items-center">
              <div className="relative bg-[#732824] rounded-3xl p-6 sm:p-10 flex flex-col items-center shadow-2xl w-full max-w-sm overflow-hidden">
                {/* Animated Glowing Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: "4px solid transparent",
                    background: "linear-gradient(120deg, #bfa76a, #ffe9b0, #bfa76a) border-box",
                    boxShadow: "0 0 22px 8px #bfa76a, 0 0 64px 16px #ffe9b0"
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #bfa76a 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#bfa76a] rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#bfa76a] rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#bfa76a] rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#bfa76a] rounded-br-3xl" />
                <div className="relative z-10 flex flex-col items-center w-full">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#bfa76a]/20 border-2 border-[#bfa76a] flex items-center justify-center mb-5 shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FaHotel size={28} color="#bfa76a" />
                  </motion.div>
                  <span className="text-[#bfa76a] text-xs tracking-[0.25em] uppercase font-bold mb-2">Hotel Goldy Premium</span>
                  <h3 className="text-2xl font-serif font-bold text-white text-center mb-2 leading-snug">Your Haven of Comfort & Elegance</h3>
                  <div className="w-10 h-px bg-[#bfa76a] my-4" />
                  <p className="text-white/70 text-sm text-center mb-6 leading-relaxed">Reserve your stay and experience world-class hospitality crafted just for you.</p>
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-6 border border-[#bfa76a]/40">
                    <FaPhoneAlt size={14} color="#bfa76a" />
                    <span className="text-white font-bold tracking-wider text-sm">+91-8093261999</span>
                  </div>
                  <motion.a
                    href="/contact"
                    className="w-full text-center bg-[#bfa76a] text-[#732824] font-black rounded-full px-8 py-3 shadow-lg tracking-widest uppercase text-sm"
                    whileHover={{ scale: 1.04, backgroundColor: "#ffffff" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Make a Reservation
                  </motion.a>
                </div>
              </div>
            </MotionSection>
          </div>
        </motion.section>


        {/* ── Experience True Comfort ─────────────────────────────────────── */}
        <motion.section
          className="w-full max-w-6xl mx-auto mb-20 px-4 relative"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Abstract Decorative Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <AbstractShapes className="w-full h-full" />
          </div>
          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 bg-linear-to-br from-[#732824] to-[#4a1a18] rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-14">
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #bfa76a 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent" />
            <MotionSection direction="right" className="flex-1 flex flex-col justify-center items-start relative z-10">
              <span className="text-[#bfa76a] text-xs tracking-[0.3em] uppercase font-bold mb-3">Our Promise</span>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-4 leading-snug">
                Experience <span className="text-[#bfa76a] italic">True</span> Comfort
              </h2>
              <div className="w-14 h-1 bg-[#bfa76a] rounded mb-5" />
              <p className="text-white/75 text-lg mb-8 leading-relaxed max-w-xl">
                Our hotel blends modern luxury with classic elegance, offering you a peaceful retreat. Enjoy spacious rooms, world-class amenities, and personalized service.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Free Wi-Fi', 'Room Service', 'Spa & Pool', '24/7 Support'].map((f, i) => (
                  <motion.span
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white/10 border border-[#bfa76a]/40 text-white/80 text-xs px-4 py-2 rounded-full tracking-wide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    whileHover={{ backgroundColor: "rgba(191,167,106,0.25)", scale: 1.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]" />{f}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href="/rooms"
                className="inline-flex items-center gap-2 bg-[#bfa76a] text-[#732824] font-black rounded-full px-8 py-3 shadow-lg tracking-widest uppercase text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Explore Rooms
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
            </MotionSection>
            <MotionSection direction="left" delay={0.2} className="flex-1 flex justify-center items-center relative z-10">
              <div className="relative">
                <motion.div
                  className="absolute -inset-3 rounded-3xl bg-[#bfa76a]/20 blur-xl"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Image
                  src="https://gos3.ibcdn.com/153616f2-9ad6-443a-a28a-a060d5130696.jpg"
                  alt="Hotel Comfort"
                  width={600} height={400}
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-2 border-[#bfa76a]/40"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#bfa76a] text-[#732824] rounded-2xl px-5 py-3 shadow-xl font-black text-sm tracking-wider uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  5★ Luxury Hotel
                </motion.div>
              </div>
            </MotionSection>
          </div>
        </motion.section>


        {/* ── Quick CTA Blocks ───────────────────────────────────────────── */}
        <motion.section
          className="w-full max-w-6xl mx-auto mb-20 px-4 relative"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative Illustrations */}
          <div className="absolute top-0 left-0 opacity-15 pointer-events-none">
            <ServiceBellIllustration className="w-32 h-32" />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none">
            <LuxuryKeyIllustration className="w-32 h-32" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {[
              { href: '/rooms', icon: <FaBed size={36} />, title: 'Luxury Rooms', desc: 'Explore our curated collection of suites crafted for your comfort.', cta: 'View Rooms', illustration: <BedIllustration className="w-full h-32 mb-4" /> },
              { href: '/banquet', icon: <FaGlassCheers size={36} />, title: 'Banquet Hall', desc: 'Host weddings, receptions, and corporate events in grand style.', cta: 'Book Event', illustration: <ChampagneIllustration className="w-full h-32 mb-4" /> },
              { href: '/contact', icon: <FaPhoneAlt size={36} />, title: 'Get In Touch', desc: 'Our team is available 24/7 to assist with any inquiry.', cta: 'Contact Us', illustration: <ServiceBellIllustration className="w-full h-32 mb-4" /> },
            ].map((item, i) => (
              <MotionCard key={i} delay={i * 0.15}>
                <a href={item.href} className="group relative overflow-hidden flex flex-col items-center text-center bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Illustration */}
                  <div className="opacity-80 mb-4">
                    {item.illustration}
                  </div>
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-[#732824]/5 flex items-center justify-center text-[#bfa76a] mb-5 shadow"
                    whileHover={{ backgroundColor: "#732824", color: "#ffffff", rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold text-[#732824] mb-2">{item.title}</h3>
                  <p className="text-[#7c6f57] text-sm mb-5 leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#bfa76a] font-bold text-xs tracking-widest uppercase">
                    {item.cta}
                    <motion.svg
                      width="14" height="14" viewBox="0 0 16 16" fill="none"
                      whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </span>
                </a>
              </MotionCard>
            ))}
          </div>
        </motion.section>


        {/* ── Featured Moments ───────────────────────────────────────────── */}
        <motion.section
          className="w-full mb-20 max-w-6xl mx-auto px-4 relative"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Star Rating Illustration */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
            <StarRatingIllustration className="w-48 h-20" />
          </div>
          <SectionHeader label="Our Highlights" title="Featured Moments" />
          <MotionItem delay={0.15}>
            <p className="text-[#7c6f57] text-center max-w-2xl mx-auto font-serif text-lg leading-relaxed mb-10">
              Where elegance meets comfort—every moment is crafted for your delight.
            </p>
          </MotionItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1656570092191-b89cc3136833?q=80&w=1313&auto=format&fit=crop', title: 'Elegant Lobby', desc: 'Step into a world of luxury and warmth.' },
              { src: 'https://images.unsplash.com/photo-1633411191684-7bcf9e17ab2f?q=80&w=1170&auto=format&fit=crop', title: 'Grand Banquet', desc: 'Celebrate your finest moments in style.' },
              { src: 'https://images.unsplash.com/photo-1633411187642-f84216917af1?q=80&w=1191&auto=format&fit=crop', title: 'Premium Suite', desc: 'Classic elegance, modern comfort.' },
              { src: 'https://images.unsplash.com/photo-1719368420509-059a3b22579e?q=80&w=1074&auto=format&fit=crop', title: 'Sunset Terrace', desc: 'Breathtaking views from our terrace.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Image src={item.src} alt={item.title} width={340} height={400} className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-[#bfa76a]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <motion.div
                    className="flex items-center gap-2 mb-1"
                    initial={{ x: -10, opacity: 0.8 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <FaCameraRetro size={14} color="#bfa76a" />
                    <h3 className="font-serif font-bold text-white text-lg">{item.title}</h3>
                  </motion.div>
                  <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* ── Banquet Halls ──────────────────────────────────────────────── */}
        <motion.section
          className="w-full mb-20 max-w-6xl mx-auto px-4 relative"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Champagne Illustration Decorations */}
          <div className="absolute top-20 -left-10 opacity-10  pointer-events-none hidden lg:block">
            <ChampagneIllustration className="w-40 h-40" />
          </div>
          <div className="absolute bottom-20 -right-10 opacity-10 pointer-events-none hidden lg:block">
            <ChampagneIllustration className="w-40 h-40" />
          </div>
          <SectionHeader label="Events & Celebrations" title="Banquet Halls" />
          <MotionItem delay={0.15}>
            <p className="text-[#7c6f57] text-center max-w-2xl mx-auto font-serif text-lg leading-relaxed mb-10">
              Host your special events in our elegant banquet halls—perfect for weddings, conferences, and celebrations.
            </p>
          </MotionItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Grand Ballroom", capacity: "300", features: ["Stage","AV System","Catering"], image: "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?q=80&w=1221&auto=format&fit=crop" },
              { title: "Royal Hall", capacity: "150", features: ["Dance Floor","Bar","Lighting"], image: "https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=1170&auto=format&fit=crop" },
              { title: "Emerald Lounge", capacity: "100", features: ["Private Bar","Lounge Seating","Ambient Lighting"], image: "https://plus.unsplash.com/premium_photo-1678398381832-21d55102a4ae?q=80&w=1170&auto=format&fit=crop" },
              { title: "Skyline Terrace", capacity: "80", features: ["Open Air","City View","Live Music"], image: "https://plus.unsplash.com/premium_photo-1678652647092-377ba6009daa?q=80&w=1171&auto=format&fit=crop" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <BanquetCard title={card.title} capacity={card.capacity} features={card.features} image={card.image} />
              </motion.div>
            ))}
          </div>
          <MotionItem delay={0.3} className="mt-8 flex justify-center">
            <motion.a
              href="/banquet"
              className="inline-flex items-center gap-2 border-2 border-[#732824] text-[#732824] font-bold rounded-full px-8 py-3 tracking-widest uppercase text-sm"
              whileHover={{ backgroundColor: "#732824", color: "#ffffff", scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              View All Halls
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </MotionItem>
        </motion.section>


        {/* ── Gallery ────────────────────────────────────────────────────── */}
        <motion.section
          className="w-full mb-20 bg-[#732824] py-16 px-4"
          initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <MotionItem delay={0}>
                <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Visual Tour</span>
              </MotionItem>
              <MotionItem delay={0.1}>
                <h2 className="font-serif text-4xl font-extrabold text-white mb-3 text-center">Our Gallery</h2>
              </MotionItem>
              <MotionItem delay={0.2}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-px bg-[#bfa76a]/50" />
                  <span className="text-[#bfa76a]">✦</span>
                  <div className="w-16 h-px bg-[#bfa76a]/50" />
                </div>
              </MotionItem>
              <MotionItem delay={0.25}>
                <p className="text-white/70 text-center max-w-2xl font-serif text-lg leading-relaxed">
                  A glimpse into the elegance and comfort that awaits you at Hotel Goldy Premium.
                </p>
              </MotionItem>
            </div>
            <MotionSection direction="scale">
              <GalleryGrid images={[
                {src: "https://images.unsplash.com/photo-1592229505678-cf99a9908e03?q=80&w=1074&auto=format&fit=crop", alt: "Lobby"},
                {src: "https://images.unsplash.com/photo-1560185128-e173042f79dd?q=80&w=1111&auto=format&fit=crop", alt: "Banquet"},
                {src: "https://images.unsplash.com/photo-1612645213559-6af1d4edeaf8?q=80&w=1170&auto=format&fit=crop", alt: "Suite"},
                {src: "https://images.unsplash.com/photo-1746549859840-808544238d42?q=80&w=1170&auto=format&fit=crop", alt: "Room"},
              ]} />
            </MotionSection>
            <MotionItem delay={0.4} className="mt-8 flex justify-center">
              <motion.a
                href="/gallery"
                className="inline-flex items-center gap-2 border-2 border-[#bfa76a] text-[#bfa76a] font-bold rounded-full px-8 py-3 tracking-widest uppercase text-sm"
                whileHover={{ backgroundColor: "#bfa76a", color: "#732824", scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                View Full Gallery
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
            </MotionItem>
          </div>
        </motion.section>

      </main>
    </>
  );
}