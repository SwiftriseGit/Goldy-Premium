"use client";

import { motion } from "framer-motion";
import { FaAward, FaHeart, FaUsers, FaStar, FaShieldAlt, FaLeaf } from "react-icons/fa";
import Image from "next/image";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { HotelBuildingIllustration, CrownIllustration, StarRatingIllustration } from "../components/Illustrations";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.jdmagicbox.com/v2/comp/jeypore/d4/9999p6854.6854.250821142753.d1d4/catalogue/f7vwsj0ezxmeg8e-45nb3wy867.jpg"
            alt="Hotel exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Decorative Top Illustration */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-30">
          <CrownIllustration className="w-20 h-20" />
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
            Since 2020
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About <span className="text-[#bfa76a] italic">Hotel Goldy Premium</span>
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
            Where luxury meets tradition, and every moment becomes a cherished memory.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/70 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-[#bfa76a] to-transparent" />
        </motion.div>
      </section>

      {/* Our Story */}
      <motion.section 
        className="w-full max-w-7xl mx-auto py-20 px-4 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Illustration */}
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

      {/* Mission & Vision */}
      <motion.section 
        className="w-full bg-linear-to-b from-[#732824] to-[#4a1a18] py-20 relative overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(circle, #bfa76a 1px, transparent 1px)", backgroundSize: "30px 30px"}} />
        
        <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <MotionItem delay={0}>
              <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">What Drives Us</span>
            </MotionItem>
            <MotionItem delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-3">Mission & Vision</h2>
            </MotionItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionCard delay={0}>
              <div className="bg-white/10 backdrop-blur-sm border border-[#bfa76a]/30 rounded-3xl p-10 h-full">
                <div className="w-16 h-16 bg-[#bfa76a]/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-[#bfa76a] text-3xl" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#bfa76a] mb-4">Our Mission</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  To provide unparalleled hospitality that exceeds expectations, creating memorable experiences 
                  through personalized service, attention to detail, and a commitment to excellence in every interaction.
                </p>
              </div>
            </MotionCard>

            <MotionCard delay={0.15}>
              <div className="bg-white/10 backdrop-blur-sm border border-[#bfa76a]/30 rounded-3xl p-10 h-full">
                <div className="w-16 h-16 bg-[#bfa76a]/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaStar className="text-[#bfa76a] text-3xl" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#bfa76a] mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  To be the most cherished luxury destination in Eastern India, recognized for setting new standards 
                  in hospitality, sustainable practices, and creating lasting memories for generations to come.
                </p>
              </div>
            </MotionCard>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="w-full max-w-7xl mx-auto py-20 px-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">What We Stand For</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Our Core Values</h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-[#bfa76a]/50" />
              <span className="text-[#bfa76a]">✦</span>
              <div className="w-16 h-px bg-[#bfa76a]/50" />
            </div>
          </MotionItem>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart />, title: "Passionate Service", desc: "Every interaction stems from genuine care and dedication to your comfort." },
            { icon: <FaAward />, title: "Excellence", desc: "We pursue the highest standards in every detail of your experience." },
            { icon: <FaUsers />, title: "Community", desc: "Building lasting relationships with our guests and the local community." },
            { icon: <FaStar />, title: "Quality", desc: "Premium amenities and services that define true luxury." },
            { icon: <FaShieldAlt />, title: "Integrity", desc: "Honest, transparent, and reliable in all our commitments." },
            { icon: <FaLeaf />, title: "Sustainability", desc: "Responsible practices that respect our environment and future." }
          ].map((value, i) => (
            <MotionCard key={i} delay={i * 0.1}>
              <div className="bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full group">
                <motion.div
                  className="w-14 h-14 bg-[#732824] rounded-2xl flex items-center justify-center text-[#bfa76a] text-2xl mb-5 group-hover:bg-[#bfa76a] group-hover:text-[#732824] transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-[#732824] mb-3">{value.title}</h3>
                <p className="text-[#7c6f57] leading-relaxed">{value.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="w-full bg-[#FEFAE0] py-20 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
          <StarRatingIllustration className="w-64 h-24" />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <MotionItem delay={0}>
              <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">What Sets Us Apart</span>
            </MotionItem>
            <MotionItem delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Why Choose Hotel Goldy Premium</h2>
            </MotionItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Prime Location", desc: "Strategically located in Lingaraj Nagar, Jeypore, easily accessible from major landmarks." },
              { num: "02", title: "Luxury Amenities", desc: "50+ well-appointed rooms with modern facilities and comfort-first design." },
              { num: "03", title: "Exceptional Dining", desc: "Customizable menus and buffet services for every palate and occasion." },
              { num: "04", title: "Event Expertise", desc: "Grand banquet halls perfect for weddings, conferences, and celebrations." },
              { num: "05", title: "24/7 Support", desc: "Round-the-clock concierge and room service for your convenience." },
              { num: "06", title: "Trusted by Thousands", desc: "10,000+ satisfied guests and counting, with 5-star reviews." }
            ].map((item, i) => (
              <MotionCard key={i} delay={i * 0.1}>
                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-[#bfa76a]/20 shadow-lg hover:shadow-xl transition-all group">
                  <motion.div
                    className="text-6xl font-black text-[#bfa76a]/20 group-hover:text-[#bfa76a]/40 transition-colors font-serif"
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.num}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#732824] mb-2">{item.title}</h3>
                    <p className="text-[#7c6f57]">{item.desc}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Hotel Goldy Premium?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why thousands of guests choose us for their special moments.
            </p>
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
    </div>
  );
}
