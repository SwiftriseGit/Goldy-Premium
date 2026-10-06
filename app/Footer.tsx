import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#732824] to-[#1a0a09] text-white">
      {/* Top Decorative Line */}
      <div className="w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-12 mb-8">
          
          {/* Col 1: Logo & About (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col">
            <Link href="/" className="block mb-4">
              <Image
                src="/LOGO (1).png"
                alt="Hotel Goldy Premium"
                width={240}
                height={80}
                className="h-20 sm:h-24 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Experience luxury and comfort in the heart of Jeypore. Your perfect stay awaits with world-class amenities and exceptional hospitality.
            </p>
     

          </div>

          {/* Col 2 & 3: Quick Links and Contact Info (Two Columns on Mobile) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-8">
            
            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-serif text-[17px] md:text-xl font-bold text-[#bfa76a] mb-3 md:mb-4">Quick Links</h3>
              <div className="w-12 md:w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
              <ul className="space-y-2.5 md:space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/rooms" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group text-[13px] md:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="font-serif text-[17px] md:text-xl font-bold text-[#bfa76a] mb-3 md:mb-4">Contact Info</h3>
            <div className="w-12 md:w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <FaMapMarkerAlt className="text-[#bfa76a] text-[15px] md:text-lg mt-0.5 md:mt-1 shrink-0" />
                <div className="text-white/80 text-[13px] md:text-sm leading-snug md:leading-relaxed">
                  <p>LIC Office, Near Branch,</p>
                  <p>Near JMD Dhaba, Back Side,</p>
                  <p>Lingaraj Nagar, Jeypore, Odisha 764002</p>
                </div>
              </li>
              <li className="flex items-start md:items-center gap-2 md:gap-3">
                <FaPhoneAlt className="text-[#bfa76a] text-[15px] md:text-lg shrink-0 mt-0.5 md:mt-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918984909990" className="text-white/80 hover:text-[#bfa76a] transition-colors text-[13px] md:text-sm whitespace-nowrap">
                   +91 89849 09990
                  </a>
                  <a href="tel:+917682816711" className="text-white/80 hover:text-[#bfa76a] transition-colors text-[13px] md:text-sm whitespace-nowrap">
                   +91 76828 16711
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <FaEnvelope className="text-[#bfa76a] text-[15px] md:text-lg shrink-0 mt-0.5" />
                <a href="mailto:hotelgoldypremium@gmail.com" className="text-white/80 hover:text-[#bfa76a] transition-colors text-[13px] md:text-sm break-all">
                  hotelgoldypremium@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <FaClock className="text-[#bfa76a] text-[15px] md:text-lg shrink-0" />
                <span className="text-white/80 text-[13px] md:text-sm">24/7 Available</span>
              </li>
            </ul>
          </div>
          
          </div>

          {/* Col 4: QR Code & Special Offer (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start bg-white/[0.04] border border-white/10 p-5 md:p-6 rounded-2xl shadow-xl w-full">
            <h4 className="font-serif text-lg font-bold text-white mb-1">
              Secure Payment
            </h4>
            <p className="text-[12px] md:text-xs text-gray-300 mb-3">
              Scan the QR code to make secure payments directly.
            </p>

            <div className="bg-[#bfa76a]/10 border border-[#bfa76a]/40 px-3 py-2 rounded-lg w-full mb-4 flex items-center justify-center gap-2 shadow-sm">
              <span className="text-lg">✨</span>
              <p className="text-[#bfa76a] font-bold text-xs tracking-wide">
                Get <span className="text-white">15% OFF</span> on online bookings!
              </p>
            </div>

            {/* Flex Container for QR and Info */}
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 w-full">
              {/* QR Code */}
              <div className="block">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-white p-2 rounded-xl shadow-md sm:mb-4 border border-[#bfa76a]/40 hover:shadow-lg hover:shadow-[#bfa76a]/20 transition-all duration-300">
                  <Image
                    src="/qr.jpeg"
                    alt="Scan QR Code for Secure Payment"
                    fill
                    className="object-contain p-1 rounded-lg"
                  />
                </div>
              </div>

              {/* Services Quick List */}
              <div className="sm:border-t border-white/10 sm:pt-3 w-full flex flex-col justify-center">
                <span className="text-[11px] font-bold text-[#bfa76a] uppercase tracking-wider block mb-2">
                  Our Services:
                </span>
                <ul className="text-[11px] sm:text-[12px] text-gray-400 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#bfa76a] font-bold">•</span>
                    <span>Luxury Accommodations</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#bfa76a] font-bold">•</span>
                    <span>24/7 Room Service</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#bfa76a] font-bold">•</span>
                    <span>Free WiFi & Parking</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#bfa76a] font-bold">•</span>
                    <span>Event Halls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-2"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-white/60 text-[12px] md:text-xs text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Built by{' '}
              <a href="https://swiftrise.in" target="_blank" rel="noopener noreferrer" className="text-[#bfa76a] hover:text-white transition-colors underline underline-offset-4 decoration-[#bfa76a] hover:decoration-white font-medium">
                Swiftrise Solution Pvt Ltd
              </a>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 text-white/60 text-[12px] md:text-xs">
            <a href="/privacy-policy" className="hover:text-[#bfa76a] transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="hidden md:inline">&bull;</span>
            <a href="/terms-conditions" className="hover:text-[#bfa76a] transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"></div>
    </footer>
  );
}
