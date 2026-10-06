
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "./components/usePathnameClient";
import { FaWhatsapp } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full shadow-lg py-3 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 z-50 min-h-[56px] md:min-h-[70px] transition-all duration-300 ${scrolled ? 'bg-[#1a0a09]/95 backdrop-blur-md' : 'bg-transparent'}`}
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
                className="w-13 h-10 md:w-14 md:h-14 object-contain scale-150 md:scale-[2.9]"
                priority
              />
            </span>
          </Link>
        </div>
        {/* Desktop nav center, hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium justify-center pr-20 w-full md:ml-0">
          <NavLink href="/" scrolled={scrolled}>Home</NavLink>
          <NavLink href="/rooms" scrolled={scrolled}>Rooms</NavLink>
          <NavLink href="/gallery" scrolled={scrolled}>Gallery</NavLink>
          <NavLink href="/about" scrolled={scrolled}>About</NavLink>
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
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="focus:outline-none flex flex-col justify-center items-center w-10 h-10"
            >
              <span className="block w-8 h-1 rounded bg-[#bfa76a] transition-all duration-300 mb-1"
                style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(10px)' : 'none' }}
              ></span>
              <span className={`block w-8 h-1 rounded bg-[#bfa76a] transition-all duration-300 mb-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className="block w-8 h-1 rounded bg-[#bfa76a] transition-all duration-300"
                style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'none' }}
              ></span>
            </button>
            {mobileMenuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-[260px] bg-[#1a0a09] rounded-xl shadow-lg border border-[#bfa76a] z-50 p-4 animate-fade-in">
                <div className="grid grid-cols-1 divide-y divide-[#bfa76a]/30">
                  <div className="flex flex-col gap-2">
                    <NavLink href="/" scrolled={true} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                    <NavLink href="/about" scrolled={true} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                    <NavLink href="/rooms" scrolled={true} onClick={() => setMobileMenuOpen(false)}>Rooms</NavLink>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <NavLink href="/gallery" scrolled={true} onClick={() => setMobileMenuOpen(false)}>Gallery</NavLink>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <NavLink href="/contact" scrolled={true} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                  </div>
                  {/* Mobile WhatsApp CTA */}
                  <div className="pt-3 mt-1">
                    <a
                      href="https://wa.me/918984909990?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Goldy%20Premium."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-[#25D366]/30 active:scale-95"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Book via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, scrolled, onClick }: { href: string; children: React.ReactNode; scrolled: boolean; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`relative px-1 py-3 rounded-md transition-colors duration-200 bg-transparent
        text-[#bfa76a] hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
        ${isActive
          ? 'font-bold text-2xl text-white after:scale-x-100 after:bg-[#bfa76a]'
          : 'after:bg-[#bfa76a] after:scale-x-0'}
        after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300`
      }
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
