"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import ContactForm from "../ContactForm";
import { MotionSection, MotionItem, MotionCard } from "../MotionSection";
import { ServiceBellIllustration, LuxuryKeyIllustration } from "../Illustrations";

export default function ContactInfoAndForm() {
  return (
    <motion.section className="w-full max-w-7xl mx-auto py-20 px-4 relative" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
      {/* Background Illustrations */}
      <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
        <ServiceBellIllustration className="w-40 h-40" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <LuxuryKeyIllustration className="w-40 h-40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {[
          {
            icon: <FaPhoneAlt />,
            title: "Phone",
            value: "+91 89849 09990",
            link: "tel:+918984909990",
            color: "#bfa76a"
          },
          {
            icon: <FaEnvelope />,
            title: "Email",
            value: "hotelgoldypremium@gmail.com",
            link: "mailto:hotelgoldypremium@gmail.com",
            color: "#bfa76a"
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            value: "Lingaraj Nagar, Jeypore, Odisha 764002",
            link: "https://maps.google.com/?q=Lingaraj+Nagar+Jeypore",
            color: "#bfa76a"
          },
          {
            icon: <FaClock />,
            title: "Available",
            value: "24/7 Service",
            link: "#",
            color: "#bfa76a"
          }
        ].map((item, i) => (
          <MotionCard key={i} delay={i * 0.1}>
            <motion.a
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block bg-white border border-[#bfa76a]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all h-full group"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-14 h-14 bg-[#732824] rounded-2xl flex items-center justify-center text-[#bfa76a] text-2xl mb-5 mx-auto group-hover:bg-[#bfa76a] group-hover:text-[#732824] transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-serif text-lg font-bold text-[#732824] mb-2 text-center">{item.title}</h3>
              <p className="text-[#7c6f57] text-sm text-center leading-relaxed">{item.value}</p>
            </motion.a>
          </MotionCard>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <MotionSection direction="left">
          <div className="bg-linear-to-b from-[#732824] to-[#4a1a18] rounded-3xl p-10 text-white shadow-2xl h-full flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#bfa76a] mb-4">Hotel Goldy Premium</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Your comfort and satisfaction are our top priorities. Whether you&apos;re planning a stay,
                booking an event, or have questions about our services, we&apos;re here to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#bfa76a]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#bfa76a] mb-1">Visit Us</h4>
                    <p className="text-white/70 text-sm">
                      LIC Office, Near Branch,<br />
                      Near JMD Dhaba, Back Side,<br />
                      Lingaraj Nagar, Jeypore,<br />
                      Odisha 764002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#bfa76a]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <FaPhoneAlt className="text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#bfa76a] mb-1">Call Us</h4>
                    <p className="text-white/70 text-sm">+91 89849 09990</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#bfa76a]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <FaEnvelope className="text-[#bfa76a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#bfa76a] mb-1">Email Us</h4>
                    <p className="text-white/70 text-sm">hotelgoldypremium@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold text-[#bfa76a] mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebookF />, link: "https://facebook.com" },
                    { icon: <FaInstagram />, link: "https://instagram.com" },
                    { icon: <FaWhatsapp />, link: "https://wa.me/918093261999" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#bfa76a] transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection direction="right" delay={0.2}>
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#bfa76a]/20">
            <h3 className="font-serif text-2xl font-bold text-[#732824] mb-2">Send Us a Message</h3>
            <p className="text-[#7c6f57] mb-6">Fill out the form and we&apos;ll get back to you shortly.</p>
            <ContactForm />
          </div>
        </MotionSection>
      </div>
    </motion.section>
  );
}
