"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { BedIllustration, DecorativePattern } from "../components/Illustrations";
import { FaBed, FaWifi, FaTv, FaSnowflake, FaCoffee, FaShower, FaCouch, FaConciergeBell, FaCheckCircle, FaUsers, FaDoorOpen } from "react-icons/fa";

const categories = ["All", "Economy", "Deluxe", "Premium", "Family"];

const roomsData = [
  // Economy Category
  {
    category: "Economy",
    name: "Standard Single Room",
    image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=1170&auto=format&fit=crop",
    price: "₹1,499",
    size: "200 sq ft",
    occupancy: "1 Adult",
    features: ["Single Bed", "Free WiFi", "LED TV", "AC", "Attached Bathroom"],
    badge: null
  },
  {
    category: "Economy",
    name: "Standard Double Room",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1170&auto=format&fit=crop",
    price: "₹1,999",
    size: "250 sq ft",
    occupancy: "2 Adults",
    features: ["Double Bed", "Free WiFi", "LED TV", "AC", "Room Service"],
    badge: "Budget Friendly"
  },
  // Deluxe Category
  {
    category: "Deluxe",
    name: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1074&auto=format&fit=crop",
    price: "₹2,999",
    size: "300 sq ft",
    occupancy: "2 Adults",
    features: ["King Size Bed", "Free WiFi", "LED TV", "AC", "Room Service", "Complimentary Breakfast"],
    badge: null
  },
  {
    category: "Deluxe",
    name: "Deluxe Twin Room",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop",
    price: "₹3,499",
    size: "320 sq ft",
    occupancy: "2-3 Adults",
    features: ["2 Single Beds", "Premium WiFi", "Smart TV", "AC", "Breakfast", "Work Desk"],
    badge: null
  },
  // Premium Category
  {
    category: "Premium",
    name: "Executive Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop",
    price: "₹4,999",
    size: "450 sq ft",
    occupancy: "2-3 Adults",
    features: ["King Bed + Sofa", "Premium WiFi", "Smart TV", "AC", "Mini Bar", "Breakfast & Dinner", "Work Desk"],
    badge: "Most Popular"
  },
  {
    category: "Premium",
    name: "Premium Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop",
    price: "₹5,999",
    size: "500 sq ft",
    occupancy: "3 Adults",
    features: ["King Bed + Couch", "High-Speed WiFi", "4K TV", "Central AC", "Minibar", "All Meals", "Study Area", "Balcony"],
    badge: null
  },
  {
    category: "Premium",
    name: "Luxury Suite",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1170&auto=format&fit=crop",
    price: "₹7,999",
    size: "600 sq ft",
    occupancy: "4 Adults",
    features: ["2 Queen Beds", "High-Speed WiFi", "4K Smart TV", "Central AC", "Premium Minibar", "All Meals", "Living Area", "Bathtub"],
    badge: "Premium"
  },
  // Family Category
  {
    category: "Family",
    name: "Family Room",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1074&auto=format&fit=crop",
    price: "₹6,499",
    size: "550 sq ft",
    occupancy: "4-5 Adults",
    features: ["1 King + 2 Single Beds", "Free WiFi", "2 TVs", "AC", "Mini Fridge", "All Meals", "Connecting Rooms"],
    badge: "Family Special"
  },
  {
    category: "Family",
    name: "Presidential Suite",
    image: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1170&auto=format&fit=crop",
    price: "₹12,999",
    size: "800 sq ft",
    occupancy: "6 Adults",
    features: ["2 King Beds", "Ultra-Fast WiFi", "Multiple 4K TVs", "Central AC", "Full Kitchen", "All Meals", "2 Bathrooms", "Private Terrace"],
    badge: "Luxury"
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRooms = activeCategory === "All" 
    ? roomsData 
    : roomsData.filter(room => room.category === activeCategory);

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

      {/* Category Filter Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto py-12 px-4"
        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <MotionSection direction="scale">
          <div className="text-center mb-8">
            <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Browse by Category</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#732824] mt-2 mb-6">
              Find Your <span className="italic text-[#bfa76a]">Perfect Room</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? "bg-[#732824] text-white shadow-lg"
                    : "bg-white border-2 border-[#bfa76a]/30 text-[#732824] hover:border-[#bfa76a]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border-2 border-transparent hover:border-[#bfa76a] transition-all"
                whileHover={{ y: -8 }}
              >
                {room.badge && (
                  <div className="bg-[#bfa76a] text-[#732824] font-bold text-sm px-4 py-2 absolute top-4 right-4 z-10 rounded-full shadow-lg">
                    {room.badge}
                  </div>
                )}
                
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
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#732824]">{room.price}</span>
                    <span className="text-[#7c6f57]">/ night</span>
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
              {activeCategory !== "All" && ` in ${activeCategory} category`}
            </p>
          </div>
        </MotionItem>
      </motion.section>

      {/* Amenities Section */}
      <motion.section 
        className="w-full relative py-20 bg-linear-to-b from-[#732824] to-[#4a1a18]"
        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.2 }}
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
                    whileHover={{ rotate: 360 }}
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
        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.2 }}
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
        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.2 }}
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
                href="tel:+918093261999"
                className="bg-transparent border-2 border-white text-white font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#732824" }}
                whileTap={{ scale: 0.97 }}
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
