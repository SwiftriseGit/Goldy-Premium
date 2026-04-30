"use client";

import { motion } from "framer-motion";
import { FaConciergeBell, FaWifi, FaParking, FaUtensils, FaSpa, FaCocktail, FaSwimmingPool, FaDumbbell, FaShieldAlt, FaBed, FaCar, FaGlassCheers } from "react-icons/fa";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { ServiceBellIllustration, ChampagneIllustration, BedIllustration } from "../components/Illustrations";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <motion.section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-[#732824] to-[#4a1a18]" initial={{ opacity: 0, rotateX: 90 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut" }}>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(circle, #bfa76a 1px, transparent 1px)", backgroundSize: "30px 30px"}} />
        
        {/* Illustrations */}
        <div className="absolute top-10 left-10 opacity-20">
          <ServiceBellIllustration className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <ChampagneIllustration className="w-32 h-32" />
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
            World-Class Amenities
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our <span className="text-[#bfa76a] italic">Services</span>
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
            Experience luxury and convenience with our comprehensive range of premium services.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Services Grid */}
      <motion.section className="w-full max-w-7xl mx-auto py-20 px-4" initial={{ opacity: 0, rotateX: 90 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut" }}>
        <div className="text-center mb-16">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Everything You Need</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Featured Services</h2>
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
            {
              icon: <FaConciergeBell />,
              title: "24/7 Concierge",
              desc: "Professional assistance at all hours for bookings, recommendations, and special requests."
            },
            {
              icon: <FaBed />,
              title: "Room Service",
              desc: "Gourmet meals and beverages delivered to your room whenever you desire."
            },
            {
              icon: <FaWifi />,
              title: "High-Speed WiFi",
              desc: "Complimentary ultra-fast internet access throughout the property."
            },
            {
              icon: <FaParking />,
              title: "Valet Parking",
              desc: "Secure parking facilities with professional valet service for your vehicle."
            },
            {
              icon: <FaUtensils />,
              title: "Fine Dining",
              desc: "Exquisite multi-cuisine restaurant with buffet and à la carte options."
            },
            {
              icon: <FaSpa />,
              title: "Spa & Wellness",
              desc: "Rejuvenating spa treatments and wellness facilities for complete relaxation."
            },
            {
              icon: <FaSwimmingPool />,
              title: "Swimming Pool",
              desc: "Temperature-controlled pool with poolside service for your leisure."
            },
            {
              icon: <FaDumbbell />,
              title: "Fitness Center",
              desc: "State-of-the-art gym equipment for maintaining your fitness routine."
            },
            {
              icon: <FaGlassCheers />,
              title: "Banquet Halls",
              desc: "Elegant event spaces perfect for weddings, conferences, and celebrations."
            },
            {
              icon: <FaCocktail />,
              title: "Bar & Lounge",
              desc: "Premium selection of beverages in a sophisticated atmosphere."
            },
            {
              icon: <FaShieldAlt />,
              title: "Security",
              desc: "24/7 CCTV surveillance and trained security personnel for your safety."
            },
            {
              icon: <FaCar />,
              title: "Airport Transfer",
              desc: "Convenient pickup and drop-off services to and from the airport."
            }
          ].map((service, i) => (
            <MotionCard key={i} delay={i * 0.08}>
              <div className="bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full group relative overflow-hidden">
                {/* Background Animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div
                  className="w-16 h-16 bg-[#732824] rounded-2xl flex items-center justify-center text-[#bfa76a] text-3xl mb-6 group-hover:bg-[#bfa76a] group-hover:text-[#732824] transition-all"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="font-serif text-xl font-bold text-[#732824] mb-3">{service.title}</h3>
                <p className="text-[#7c6f57] leading-relaxed">{service.desc}</p>
              </div>
            </MotionCard>
          ))}
        </div>
      </motion.section>

      {/* Premium Packages */}
      <motion.section className="w-full bg-linear-to-b from-white to-[#FEFAE0] py-20" initial={{ opacity: 0, rotateX: 90 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut" }}>
        <div className="w-full  max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <MotionItem delay={0}>
              <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Special Offers</span>
            </MotionItem>
            <MotionItem delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Service Packages</h2>
            </MotionItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Business Traveler",
                desc: "Perfect for professionals on the go",
                features: ["Express Check-in/out", "High-speed WiFi", "Business Center Access", "Coffee & Breakfast"],
                price: "₹3,999/night"
              },
              {
                name: "Leisure Stay",
                desc: "Ideal for relaxation and comfort",
                features: ["Spa Treatment", "Pool Access", "Room Service", "Welcome Drink"],
                price: "₹4,999/night",
                featured: true
              },
              {
                name: "Celebration Package",
                desc: "Make your special moments memorable",
                features: ["Banquet Hall 2hrs", "Decoration Services", "Custom Menu", "Photography Session"],
                price: "₹9,999/event"
              }
            ].map((pkg, i) => (
              <MotionCard key={i} delay={i * 0.15}>
                <div className={`relative bg-white border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col ${pkg.featured ? "border-[#bfa76a] scale-105" : "border-[#bfa76a]/20"}`}>
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#bfa76a] text-[#732824] px-6 py-1 rounded-full text-sm font-bold uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-[#732824] mb-2">{pkg.name}</h3>
                    <p className="text-[#7c6f57] text-sm mb-6">{pkg.desc}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#bfa76a]/20 flex items-center justify-center shrink-0">
                            <span className="w-2 h-2 rounded-full bg-[#bfa76a]" />
                          </span>
                          <span className="text-[#5a4a3a]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-[#bfa76a]/20 pt-6 mt-auto">
                    <div className="text-3xl font-black text-[#732824] mb-4">{pkg.price}</div>
                    <motion.a
                      href="/contact"
                      className={`block text-center py-3 px-6 rounded-full font-bold tracking-wider uppercase ${pkg.featured ? "bg-[#bfa76a] text-[#732824]" : "bg-[#732824] text-white"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Book Now
                    </motion.a>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Features */}
      <motion.section className="w-full max-w-7xl mx-auto py-20 px-4" initial={{ opacity: 0, rotateX: 90 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut" }}>
        <div className="text-center mb-16">
          <MotionItem delay={0}>
            <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Extra Comfort</span>
          </MotionItem>
          <MotionItem delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-[#732824] mb-3">Additional Amenities</h2>
          </MotionItem>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Laundry Service",
            "Doctor on Call",
            "Travel Desk",
            "Currency Exchange",
            "Power Backup",
            "Wheelchair Access",
            "Babysitting",
            "Pet Friendly"
          ].map((amenity, i) => (
            <MotionItem key={i} delay={i * 0.05}>
              <motion.div
                className="bg-white border border-[#bfa76a]/20 rounded-2xl p-6 text-center shadow hover:shadow-lg transition-all"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="font-semibold text-[#732824]">{amenity}</span>
              </motion.div>
            </MotionItem>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, rotateX: 90 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1, ease: "easeOut" }}>
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services or make a reservation.
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
