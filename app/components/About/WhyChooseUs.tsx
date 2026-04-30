"use client";
import { motion } from "framer-motion";
import { MotionItem, MotionCard } from "../MotionSection";

export default function WhyChooseUs() {
  const items = [
    { num: "01", title: "Prime Location", desc: "Strategically located in Lingaraj Nagar, Jeypore, easily accessible from major landmarks." },
    { num: "02", title: "Luxury Amenities", desc: "50+ well-appointed rooms with modern facilities and comfort-first design." },
    { num: "03", title: "Exceptional Dining", desc: "Customizable menus and buffet services for every palate and occasion." },
    { num: "04", title: "Event Expertise", desc: "Grand banquet halls perfect for weddings, conferences, and celebrations." },
    { num: "05", title: "24/7 Support", desc: "Round-the-clock concierge and room service for your convenience." },
    { num: "06", title: "Trusted by Thousands", desc: "10,000+ satisfied guests and counting, with 5-star reviews." }
  ];

  return (
    <motion.section 
      className="w-full bg-[#FEFAE0] py-20 relative"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
          {items.map((item, i) => (
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
  );
}
