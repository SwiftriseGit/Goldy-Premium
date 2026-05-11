import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCcVisa, FaCcMastercard, FaCcPaypal, FaWhatsapp, FaClock, FaHotel } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-[#732824] to-[#4a1a18] text-white">
      {/* Top Decorative Line */}
      <div className="w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <FaHotel className="text-[#bfa76a] text-2xl" />
              <h3 className="font-serif text-2xl font-bold text-[#bfa76a]">Hotel Goldy Premium</h3>
            </div>
            <div className="w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Experience luxury and comfort in the heart of Jeypore. Your perfect stay awaits with world-class amenities and exceptional hospitality.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xl font-bold text-[#bfa76a] mb-4">Quick Links</h3>
            <div className="w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/rooms" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="/banquet" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Banquet Halls
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-[#bfa76a] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xl font-bold text-[#bfa76a] mb-4">Contact Info</h3>
            <div className="w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#bfa76a] text-lg mt-1 shrink-0" />
                <div className="text-white/80 text-sm leading-relaxed">
                  <p>LIC Office, Near Branch,</p>
                  <p>Near JMD Dhaba, Back Side,</p>
                  <p>Lingaraj Nagar, Jeypore,</p>
                  <p>Odisha 764002</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#bfa76a] text-lg shrink-0" />
                <a href="tel:+918984909990" className="text-white/80 hover:text-[#bfa76a] transition-colors text-sm">
                 +91 89849 09990
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#bfa76a] text-lg shrink-0" />
                <a href="mailto:hotelgoldypremium@gmail.com" className="text-white/80 hover:text-[#bfa76a] transition-colors text-sm">
                  hotelgoldypremium@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-[#bfa76a] text-lg shrink-0" />
                <span className="text-white/80 text-sm">24/7 Available</span>
              </li>
            </ul>
          </div>

          {/* Services & Payment */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xl font-bold text-[#bfa76a] mb-4">Our Services</h3>
            <div className="w-16 h-1 bg-[#bfa76a] mb-4 rounded"></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]"></span>
                <span className="text-white/80 text-sm">Luxury Accommodations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]"></span>
                <span className="text-white/80 text-sm">24/7 Room Service</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]"></span>
                <span className="text-white/80 text-sm">Event & Banquet Halls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]"></span>
                <span className="text-white/80 text-sm">Free WiFi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a]"></span>
                <span className="text-white/80 text-sm">Parking Facilities</span>
              </li>
            </ul>
            
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://swiftrise.in/" target="_blank" rel="noopener noreferrer" className="text-[#bfa76a] hover:underline">
                Swiftrise solution Pvt Ltd
              </a>
              . All rights reserved.
            </p>
            <p className="text-xs mt-1 italic text-[#bfa76a]/80">&ldquo;Where luxury meets comfort, and memories are made.&rdquo;</p>
          </div>
           
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="w-full h-1 bg-linear-to-r from-transparent via-[#bfa76a] to-transparent"></div>
    </footer>
  );
}
