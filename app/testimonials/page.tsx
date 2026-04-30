"use client";

import { motion } from "framer-motion";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { StarRatingIllustration, DecorativePattern } from "../components/Illustrations";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "January 2025",
    comment: "Excellent stay! The rooms were spacious and clean. The staff was incredibly friendly and helpful. The breakfast buffet was delicious with a great variety. Highly recommend!",
    image: "AS"
  },
  {
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    date: "December 2024",
    comment: "Beautiful hotel with stunning interiors. Loved the service and attention to detail. The banquet hall was perfect for our anniversary celebration. Will definitely return!",
    image: "PP"
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    rating: 4,
    date: "November 2024",
    comment: "Great value for money! The Executive Suite exceeded our expectations. Location is convenient and the staff went above and beyond to make our stay comfortable.",
    image: "RK"
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    date: "October 2024",
    comment: "Absolutely loved the ambiance! Perfect blend of luxury and comfort. The 24/7 room service was excellent. The hotel maintained high cleanliness standards throughout.",
    image: "SR"
  },
  {
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    date: "September 2024",
    comment: "Outstanding hospitality! Hosted my business conference here and everything was seamless. The banquet facilities are top-notch with modern amenities and professional staff.",
    image: "VS"
  },
  {
    name: "Anjali Mehta",
    location: "Pune, Maharashtra",
    rating: 4,
    date: "August 2024",
    comment: "Wonderful experience! The rooms are elegantly designed and very comfortable. WiFi was fast and reliable. The location near Lingaraj Nagar is very convenient.",
    image: "AM"
  }
];

const stats = [
  { number: "1500+", label: "Happy Guests" },
  { number: "4.9", label: "Average Rating" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "500+", label: "5-Star Reviews" }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <motion.section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-[#732824] to-[#4a1a18]" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="absolute inset-0 opacity-5">
          <DecorativePattern />
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
            Guest Experiences
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What Our Guests <span className="text-[#bfa76a] italic">Say</span>
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
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className="w-full max-w-7xl mx-auto py-16 px-4 -mt-16" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <MotionCard key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-[#bfa76a]/20 hover:border-[#bfa76a] transition-all">
                <div className="text-4xl md:text-5xl font-bold text-[#732824] mb-2">{stat.number}</div>
                <div className="text-[#7c6f57] font-semibold">{stat.label}</div>
              </div>
            </MotionCard>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section className="w-full max-w-7xl mx-auto py-20 px-4" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <MotionSection direction="up">
          <div className="text-center mb-16">
            <span className="text-[#bfa76a] text-sm tracking-[0.3em] uppercase font-bold">Authentic Reviews</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#732824] mt-4 mb-4">
              Trusted by <span className="italic text-[#bfa76a]">Travelers</span>
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#bfa76a]" />
              <span className="text-[#bfa76a] text-xl">✦</span>
              <div className="w-16 h-px bg-[#bfa76a]" />
            </div>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <MotionCard key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#bfa76a]/20 hover:border-[#bfa76a] transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-b from-[#732824] to-[#732824] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#732824]">{testimonial.name}</h3>
                      <p className="text-sm text-[#7c6f57]">{testimonial.location}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-[#bfa76a] text-2xl opacity-30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, si) => (
                    <motion.span
                      key={si}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: si * 0.1 }}
                    >
                      <FaStar className="text-[#bfa76a]" />
                    </motion.span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-[#7c6f57] italic mb-4 flex-grow leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Date */}
                <div className="border-t border-[#bfa76a]/20 pt-3">
                  <p className="text-sm text-[#7c6f57]">{testimonial.date}</p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Own Story?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8">
              Join hundreds of satisfied guests and experience the luxury of Hotel Goldy Premium.
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
                Book Your Stay
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
