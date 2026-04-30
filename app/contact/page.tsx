"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { MotionSection, MotionItem, MotionCard } from "../components/MotionSection";
import { ServiceBellIllustration, LuxuryKeyIllustration } from "../components/Illustrations";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Hero Section */}
      <motion.section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1174&auto=format&fit=crop"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
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
            Get In Touch
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contact <span className="text-[#bfa76a] italic">Us</span>
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
            We&apos;re here to help. Reach out for bookings, inquiries, or any assistance you need.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Information Cards */}
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
          {/* Left: Info */}
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

          {/* Right: Form */}
          <MotionSection direction="right" delay={0.2}>
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#bfa76a]/20">
              <h3 className="font-serif text-2xl font-bold text-[#732824] mb-2">Send Us a Message</h3>
              <p className="text-[#7c6f57] mb-6">Fill out the form and we&apos;ll get back to you shortly.</p>
              <ContactForm />
            </div>
          </MotionSection>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section className="w-full bg-white py-16" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <MotionItem delay={0}>
              <span className="uppercase tracking-[0.3em] text-[#bfa76a] text-xs font-bold mb-3 block">Find Us</span>
            </MotionItem>
            <MotionItem delay={0.1}>
              <h2 className="font-serif text-4xl font-extrabold text-[#732824] mb-3">Our Location</h2>
            </MotionItem>
          </div>

          <MotionSection direction="scale">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#bfa76a]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.198445846959!2d82.57283631487653!3d19.35274298694516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2cf2a1e8dd91e9%3A0x75c4e4a8aa9c66bf!2sLingaraj%20Nagar%2C%20Jeypore%2C%20Odisha%20764002!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Goldy Premium Location"
              />
            </div>
          </MotionSection>
        </div>
      </motion.section>

      {/* Quick Contact CTA */}
      <motion.section className="w-full bg-linear-to-r from-[#732824] to-[#732824] py-16" initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}>
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <MotionItem delay={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
          </MotionItem>
          <MotionItem delay={0.2}>
            <p className="text-white/80 text-lg mb-8">
              Our team is available 24/7 to help with reservations, special requests, and any questions.
            </p>
          </MotionItem>
          <MotionItem delay={0.4}>
            <motion.a
              href="tel:91 89849 09990"
              className="inline-flex items-center gap-3 bg-[#bfa76a] text-[#732824] font-bold rounded-full px-10 py-4 text-lg shadow-xl tracking-wider uppercase"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.97 }}
            >
              <FaPhoneAlt />
              Call Now: +91-8093261999
            </motion.a>
          </MotionItem>
        </div>
      </motion.section>
    </div>
  );
}
