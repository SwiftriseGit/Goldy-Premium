"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { BedIllustration, DecorativePattern } from "../components/Illustrations";
import { FaBed, FaWifi, FaTv, FaSnowflake, FaCoffee, FaShower, FaCouch, FaConciergeBell, FaCheckCircle, FaUsers, FaDoorOpen, FaExclamationTriangle, FaWhatsapp } from "react-icons/fa";

const roomsData = [
  {
    category: "Standard",
    name: "Standard AC Room",
    image: "/img1.jpg",
    price: "₹1,700",
    size: "200 sq ft",
    occupancy: "2 Adults",
    features: ["Single Bed", "Free WiFi", "LED TV", "AC", "Attached Bathroom"],
    badge: null
  },
  {
    category: "Standard",
    name: "Standard Non-AC Room",
    image: "/img3.jpg",
    price: "₹1,300",
    size: "250 sq ft",
    occupancy: "2 Adults",
    features: ["Double Bed", "Free WiFi", "LED TV", "Non-AC", "Room Service"],
    badge: null
  }
];

const amenities = [
  { icon: FaBed, title: "Luxurious Bedding", description: "Premium mattresses and linens" },
  { icon: FaWifi, title: "High-Speed WiFi", description: "Complimentary throughout your stay" },
  { icon: FaTv, title: "Smart Entertainment", description: "LED/4K TVs with streaming" },
  { icon: FaSnowflake, title: "Climate Control", description: "Individual AC in every room" },
  { icon: FaCoffee, title: "Welcome Refreshments", description: "Tea, coffee, and snacks" },
  { icon: FaShower, title: "Modern Bathrooms", description: "Hot water and premium toiletries" },
  { icon: FaCouch, title: "Comfortable Seating", description: "Relaxing lounge areas" },
  { icon: FaConciergeBell, title: "24/7 Room Service", description: "Always at your service" }
];

const reviews = [
  { name: "Amit Sharma", rating: 5, comment: "Excellent rooms with top-notch service. The beds were incredibly comfortable!", location: "Mumbai" },
  { name: "Priya Patel", rating: 5, comment: "Beautiful interiors and very clean. Staff was very helpful and friendly.", location: "Delhi" },
  { name: "Rajesh Kumar", rating: 4, comment: "Great value for money. The Executive Suite exceeded our expectations!", location: "Bangalore" }
];

export default function Rooms() {
  const filteredRooms = roomsData;

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1074&auto=format&fit=crop"
            alt="Hotel Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Decorative Bed Illustration */}
        <div className="absolute top-10 right-10 opacity-15 pointer-events-none scale-150">
          <BedIllustration />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Accommodation
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxurious <span className="text-[#bfa76a] italic">Rooms</span>
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
            Experience ultimate comfort in our elegantly designed rooms, crafted for your perfect stay.
          </motion.p>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto py-12 px-4"
        initial={{ opacity: 0, scale: 0.988, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <MotionSection direction="scale">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#732824] mt-2 mb-4">
              Find Your <span className="italic text-[#bfa76a]">Perfect Room</span>
            </h2>
            <div className="w-16 h-1 bg-[#bfa76a] mx-auto rounded-full"></div>
          </div>
        </MotionSection>

        {/* Rooms Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredRooms.map((room, i) => (
            <MotionCard key={`${room.category}-${room.name}`} delay={i * 0.1}>
              <motion.div
                layout
                className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border-2 border-transparent hover:border-[#bfa76a] transition-all"
              >
                <a
                  href={`https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Hotel%20Goldy%20Premium.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-[#bfa76a]/60 text-[#bfa76a] hover:bg-[#bfa76a] hover:text-white transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                  aria-label="Book on WhatsApp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#732824]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {room.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#732824] mb-3">{room.name}</h3>
                  
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-[#732824]">{room.price}</span>
                    <span className="text-[#7c6f57]">/ night</span>
                  </div>
                  <div className="mb-4 text-sm font-semibold text-[#bfa76a]">
                    ✨ 15% OFF for online bookings
                  </div>

                  <div className="mt-4 mb-4">
                    <div className="flex items-center gap-3 ">
                      <div className="flex-shrink-0 bg-[#bfa76a] text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <FaExclamationTriangle className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#732824]">Important</p>
                        <p className="text-xs text-[#7c6f57]">Extra Guest Charges: Non-AC ₹200 , A/C ₹300</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-[#7c6f57]">
                      <FaDoorOpen className="text-[#bfa76a]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#7c6f57]">
                      <FaUsers className="text-[#bfa76a]" />
                      <span>{room.occupancy}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {room.features.slice(0, 4).map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-[#7c6f57] text-sm">
                        <FaCheckCircle className="text-[#bfa76a] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {room.features.length > 4 && (
                      <p className="text-xs text-[#bfa76a] italic">+{room.features.length - 4} more amenities</p>
                    )}
                  </div>

                </div>
              </motion.div>
            </MotionCard>
          ))}
        </motion.div>

        {/* Results Count */}
        <MotionItem delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-[#7c6f57] font-serif text-lg">
              Showing {filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"}

            </p>
          </div>
        </MotionItem>
          
      </motion.section>

      {/* Amenities Section */}
      <motion.section 
        className="w-full relative py-20 bg-linear-to-b from-[#732824] to-[#4a1a18]"
        initial={{ opacity: 0, scale: 0.988, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0 opacity-5">
          <DecorativePattern />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4">
          <MotionSection direction="up">
            <div className="text-center mb-16">
              <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Premium Facilities</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Room <span className="italic text-[#bfa76a]">Amenities</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-[#bfa76a]" />
                <span className="text-[#bfa76a] text-xl">✦</span>
                <div className="w-16 h-px bg-[#bfa76a]" />
              </div>
            </div>
          </MotionSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, i) => (
              <MotionCard key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border-2 border-[#bfa76a]/30 hover:border-[#bfa76a] transition-all">
                  <motion.div
                    className="w-12 h-12 bg-[#bfa76a] rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <amenity.icon className="text-[#732824] text-xl" />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{amenity.title}</h3>
                  <p className="text-white/70 text-sm">{amenity.description}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section 
        className="w-full bg-[#FEFAE0] py-20"
        initial={{ opacity: 0, scale: 0.988, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <MotionSection direction="up">
            <div className="text-center mb-16">
              <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Guest Experiences</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#732824] mt-4 mb-4">
                What Our Guests <span className="italic text-[#bfa76a]">Say</span>
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-[#bfa76a]" />
                <span className="text-[#bfa76a] text-xl">✦</span>
                <div className="w-16 h-px bg-[#bfa76a]" />
              </div>
            </div>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <MotionCard key={i} delay={i * 0.15}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#bfa76a]/20 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, si) => (
                      <motion.span
                        key={si}
                        className="text-[#bfa76a] text-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: si * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[#7c6f57] italic mb-4">&ldquo;{review.comment}&rdquo;</p>
                  <div className="border-t border-[#bfa76a]/20 pt-4">
                    <p className="font-bold text-[#732824]">{review.name}</p>
                    <p className="text-sm text-[#7c6f57]">{review.location}</p>
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
        initial={{ opacity: 0, scale: 0.988, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Perfect Room?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8">
              Experience luxury and comfort at Hotel Goldy Premium. Reserve your stay today!
            </p>
          </MotionItem>
          <MotionItem delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Goldy%20Premium."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#bfa76a] border-2 border-[#bfa76a] text-[#1a0a09] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "transparent", color: "#bfa76a" }}
                whileTap={{ scale: 0.987 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book via WhatsApp
              </motion.a>
              <motion.a
                href="tel:+918984909990"
                className="bg-transparent border-2 border-white text-white font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#732824" }}
                whileTap={{ scale: 0.987 }}
              >
                Call Us
              </motion.a>
            </div>
          </MotionItem>
        </div>
      </motion.section>
    </div>
  );
}
