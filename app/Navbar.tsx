
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "./components/usePathnameClient";
import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <nav
      className={`w-full shadow-lg py-2 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 z-50 h-[64px] md:h-[72px] transition-all duration-300 ${scrolled ? 'bg-[#1a0a09]/95 backdrop-blur-md' : 'bg-[#1a0a09]/80 md:bg-transparent'}`}
    >
      {/* Flex container for logo and hamburger on small devices */}
      <div className="flex w-full items-center justify-between md:ml-40">
        {/* Logo left on mobile, normal margin on desktop */}
        <div className="flex items-center gap-3 md:ml-0 select-none">
          <Link href="/" aria-label="Go to Home">
            <span className="flex items-center justify-center cursor-pointer">
              <Image
                src="/LOGO (1).png"
                alt="Hotel Logo"
                width={100}
                height={100}
                className="w-[60px] h-[48px] md:w-[72px] md:h-[72px] object-contain scale-[1.6] md:scale-[2.6]"
                priority
              />
            </span>
          </Link>
        </div>
        {/* Desktop nav center, hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium justify-center pr-20 w-full md:ml-0">
          <NavLink href="/" scrolled={scrolled}>Home</NavLink>
          <NavLink href="/about" scrolled={scrolled}>About Us</NavLink>
          <NavLink href="/services" scrolled={scrolled}>Services</NavLink>
          <NavLink href="/rooms" scrolled={scrolled}>Rooms</NavLink>
          <NavLink href="/gallery" scrolled={scrolled}>Gallery</NavLink>
          <NavLink href="/contact" scrolled={scrolled}>Contact</NavLink>
        </div>
        {/* Right side: WhatsApp Book Now + Hamburger */}
        <div className="flex items-center gap-3 z-10">
          {/* Desktop WhatsApp Quick Action Button */}
          <a
            href="https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Goldy%20Premium."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-[#bfa76a]/60 text-[#bfa76a] shadow-md hover:bg-[#bfa76a] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
            aria-label="Book on WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          {/* Mobile WhatsApp Quick Action Button */}
          <a
            href="https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Goldy%20Premium."
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-[#bfa76a]/60 text-[#bfa76a] shadow-md active:scale-95 transition-all backdrop-blur-sm"
            aria-label="Book on WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          {/* Hamburger right on mobile, hidden on desktop */}
          <div className="md:hidden flex items-center relative">
            <button
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className="focus:outline-none flex flex-col justify-center items-center w-11 h-11 active:scale-95 transition-transform"
            >
              <span className="block w-6 h-0.5 rounded bg-[#bfa76a] mb-1.5"></span>
              <span className="block w-6 h-0.5 rounded bg-[#bfa76a] mb-1.5"></span>
              <span className="block w-6 h-0.5 rounded bg-[#bfa76a]"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Drawer Overlay */}
    {mobileMenuOpen && (
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transition-opacity"
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    )}

    {/* Mobile Drawer Panel */}
    <div 
      className={`fixed top-0 right-0 h-full bg-linear-to-b from-[#1a0a09] to-[#2a1110] shadow-2xl z-[70] md:hidden transform transition-transform duration-300 ease-in-out border-l border-[#bfa76a]/20 flex flex-col`}
      style={{ 
        width: 'min(85vw, 360px)',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' 
      }}
    >
      <div className="flex items-center justify-between p-5 border-b border-[#bfa76a]/20">
        <span className="font-serif text-[#bfa76a] text-xl font-bold tracking-wide">Menu</span>
        <button
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="w-11 h-11 flex items-center justify-center text-[#bfa76a] hover:text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
        <NavLink href="/" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>Home</NavLink>
        <NavLink href="/about" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>About Us</NavLink>
        <NavLink href="/services" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>Services</NavLink>
        <NavLink href="/rooms" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>Rooms</NavLink>
        <NavLink href="/gallery" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>Gallery</NavLink>
        <NavLink href="/contact" scrolled={true} onClick={() => setMobileMenuOpen(false)} isMobile>Contact</NavLink>

        <div className="mt-8 pt-8 border-t border-[#bfa76a]/20">
          <a
            href="https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Goldy%20Premium."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-3 bg-[#bfa76a]/10 border border-[#bfa76a]/40 hover:bg-[#bfa76a] text-[#bfa76a] hover:text-white py-3.5 rounded-xl font-bold text-[14px] tracking-wider transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

function NavLink({ href, children, scrolled, onClick, isMobile }: { href: string; children: React.ReactNode; scrolled: boolean; onClick?: () => void, isMobile?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`relative py-2 md:py-3 w-fit rounded-md transition-colors duration-200 bg-transparent
        text-[#bfa76a] hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
        ${isActive
          ? `font-bold ${isMobile ? 'text-[16px]' : 'text-xl'} text-white after:scale-x-100 after:bg-[#bfa76a]`
          : `${isMobile ? 'text-[15px]' : 'text-lg'} after:bg-[#bfa76a] after:scale-x-0`}
        after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300`
      }
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
