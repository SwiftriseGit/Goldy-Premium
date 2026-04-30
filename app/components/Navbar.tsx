
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "./usePathnameClient";

import { useEffect, useState } from "react";
import { text } from "stream/consumers";

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
      className={`w-full shadow-lg py-3 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 z-50 min-h-[56px] md:min-h-[70px] border-b-4 border-[#732824] transition-colors duration-300 ${scrolled ? 'bg-[#732824]' : 'bg-[#FEFAE0]'}`}
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
          <NavLink href="/banquet" scrolled={scrolled}>Banquet</NavLink>
          <NavLink href="/gallery" scrolled={scrolled}>Gallery</NavLink>
           <NavLink href="/about" scrolled={scrolled}>About</NavLink>
          {/* <NavLink href="/visiting-places" scrolled={scrolled}>Visiting Places</NavLink> */}
          <NavLink href="/contact" scrolled={scrolled}>Contact</NavLink>
        </div>
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
            <div className="absolute right-0 top-12 mt-2 w-[260px] bg-[#FEFAE0] rounded-xl shadow-lg border border-[#bfa76a] z-50 p-4 animate-fade-in">
              <div className="grid grid-cols-1 divide-y divide-[#bfa76a]">
                <div className="flex flex-col gap-2">
                  <NavLink href="/" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                  <NavLink href="/about" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                  <NavLink href="/rooms" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Rooms</NavLink>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <NavLink href="/banquet" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Banquet</NavLink>
                  <NavLink href="/gallery" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Gallery</NavLink>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  {/* <NavLink href="/visiting-places" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Visiting Places</NavLink> */}
                  <NavLink href="/contact" scrolled={scrolled} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                </div>
              </div>
            </div>
          )}
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
        ${scrolled ? 'text-[#bfa76a]' : 'text-[#c0582b] dark:text-[#bfa76a]'}
        hover:text-[#c0582b] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
        ${isActive
          ? `${scrolled
              ? 'font-bold text-2xl text-[#bfa76a] after:scale-x-100 after:bg-[#bfa76a]'
              : 'font-bold text-2xl text-[#c0582b] dark:text-[#c0582b] after:scale-x-100 after:bg-[#c0582b]'}
            `
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
