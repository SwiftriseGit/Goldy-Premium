"use client";

import { motion } from "framer-motion";

// Luxury Hotel Building Illustration
export function HotelBuildingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* Main Building */}
        <rect x="80" y="80" width="140" height="180" fill="#732824" opacity="0.9"/>
        <rect x="85" y="85" width="130" height="175" fill="#732824"/>
        
        {/* Windows Pattern */}
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row}>
            {[0, 1, 2].map((col) => (
              <motion.rect
                key={`${row}-${col}`}
                x={100 + col * 30}
                y={100 + row * 30}
                width="15"
                height="20"
                fill="#bfa76a"
                opacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, delay: (row + col) * 0.2, repeat: Infinity }}
              />
            ))}
          </g>
        ))}
        
        {/* Entrance */}
        <rect x="135" y="230" width="30" height="30" fill="#bfa76a"/>
        <circle cx="150" cy="245" r="2" fill="#732824"/>
        
        {/* Roof Decoration */}
        <polygon points="75,80 150,50 225,80" fill="#bfa76a" opacity="0.8"/>
        <circle cx="150" cy="45" r="8" fill="#bfa76a"/>
        <motion.path
          d="M150 35 L150 25"
          stroke="#732824"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.circle
          cx="150"
          cy="22"
          r="3"
          fill="#732824"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </motion.g>
    </svg>
  );
}

// Luxury Key Illustration
export function LuxuryKeyIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <circle cx="60" cy="100" r="25" stroke="#bfa76a" strokeWidth="6" fill="none"/>
        <circle cx="60" cy="100" r="12" fill="#732824"/>
        <rect x="75" y="95" width="80" height="10" fill="#bfa76a" rx="2"/>
        <rect x="135" y="90" width="8" height="20" fill="#bfa76a"/>
        <rect x="145" y="85" width="8" height="30" fill="#bfa76a"/>
        <motion.circle
          cx="60"
          cy="100"
          r="30"
          stroke="#bfa76a"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.g>
    </svg>
  );
}

// Service Bell Illustration
export function ServiceBellIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        {/* Base */}
        <ellipse cx="100" cy="140" rx="50" ry="8" fill="#732824" opacity="0.6"/>
        
        {/* Bell Body */}
        <path
          d="M 60 120 Q 60 80 100 80 Q 140 80 140 120 L 145 130 L 55 130 Z"
          fill="#bfa76a"
          opacity="0.9"
        />
        <path
          d="M 60 120 Q 60 85 100 85 Q 140 85 140 120"
          stroke="#e8d48a"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Top Button */}
        <motion.circle
          cx="100"
          cy="75"
          r="8"
          fill="#732824"
          whileHover={{ scale: 1.2 }}
          whileTap={{ y: 5 }}
        />
        
        {/* Ring Lines */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${60 + i * 15} ${100 - i * 10} Q 100 ${90 - i * 10} ${140 - i * 15} ${100 - i * 10}`}
            stroke="#bfa76a"
            strokeWidth="1.5"
            opacity="0"
            animate={{ opacity: [0, 0.6, 0], y: [-5, -15, -25] }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

// Champagne Glass Illustration
export function ChampagneIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glass */}
        <path d="M 80 60 L 90 130 L 110 130 L 120 60 Z" fill="#bfa76a" opacity="0.3"/>
        <path d="M 80 60 L 90 130 L 110 130 L 120 60" stroke="#bfa76a" strokeWidth="2" fill="none"/>
        
        {/* Stem */}
        <rect x="98" y="130" width="4" height="40" fill="#bfa76a"/>
        
        {/* Base */}
        <ellipse cx="100" cy="170" rx="20" ry="5" fill="#bfa76a" opacity="0.8"/>
        
        {/* Champagne */}
        <path d="M 85 80 L 90 120 L 110 120 L 115 80 Z" fill="#e8d48a" opacity="0.6"/>
        
        {/* Bubbles */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            cx={95 + (i % 2) * 10}
            cy={110}
            r="2"
            fill="white"
            opacity="0.8"
            animate={{ y: [-50, -80], opacity: [0.8, 0] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
        
        {/* Rim Sparkle */}
        <motion.circle
          cx="100"
          cy="60"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.g>
    </svg>
  );
}

// Decorative Pattern Background
export function DecorativePattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="luxuryPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="2" fill="#bfa76a" opacity="0.15"/>
          <path d="M 40 30 L 50 40 L 40 50 L 30 40 Z" fill="#bfa76a" opacity="0.08"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#luxuryPattern)"/>
    </svg>
  );
}

// Abstract Shapes Decoration
export function AbstractShapes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#bfa76a"
        strokeWidth="1"
        opacity="0.2"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.rect
        x="300"
        y="50"
        width="100"
        height="100"
        stroke="#732824"
        strokeWidth="1"
        opacity="0.15"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M 50 400 Q 150 350 250 400 Q 350 450 450 400"
        stroke="#bfa76a"
        strokeWidth="2"
        opacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}

// Crown Icon Illustration
export function CrownIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {/* Crown Base */}
        <path
          d="M 40 130 L 50 90 L 75 110 L 100 70 L 125 110 L 150 90 L 160 130 Z"
          fill="#bfa76a"
          opacity="0.9"
        />
        <rect x="40" y="130" width="120" height="20" fill="#bfa76a" rx="2"/>
        
        {/* Jewels */}
        <motion.circle
          cx="100"
          cy="75"
          r="6"
          fill="#732824"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="70" cy="100" r="4" fill="#732824"/>
        <circle cx="130" cy="100" r="4" fill="#732824"/>
        
        {/* Top Points */}
        <circle cx="50" cy="85" r="5" fill="#e8d48a"/>
        <circle cx="100" cy="65" r="5" fill="#e8d48a"/>
        <circle cx="150" cy="85" r="5" fill="#e8d48a"/>
        
        {/* Sparkles */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${60 + i * 40} ${80 + (i % 2) * 20} l 3 3 l -3 3 l -3 -3 Z`}
            fill="white"
            opacity="0"
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

// Bed Illustration
export function BedIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.g initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        {/* Bed Frame */}
        <rect x="40" y="100" width="220" height="60" fill="#732824" rx="4"/>
        
        {/* Mattress */}
        <rect x="45" y="90" width="210" height="25" fill="#bfa76a" opacity="0.8" rx="3"/>
        <path d="M 45 100 Q 150 95 255 100" stroke="#e8d48a" strokeWidth="1.5"/>
        
        {/* Pillows */}
        <ellipse cx="80" cy="85" rx="25" ry="15" fill="#e8d48a" opacity="0.7"/>
        <ellipse cx="220" cy="85" rx="25" ry="15" fill="#e8d48a" opacity="0.7"/>
        
        {/* Headboard */}
        <rect x="30" y="50" width="10" height="70" fill="#732824" rx="2"/>
        <rect x="35" y="55" width="20" height="50" fill="#732824" rx="3"/>
        
        {/* Legs */}
        <rect x="50" y="160" width="8" height="25" fill="#732824" rx="2"/>
        <rect x="242" y="160" width="8" height="25" fill="#732824" rx="2"/>
        
        {/* Decorative Pattern on Mattress */}
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={80 + i * 40} cy="102" r="2" fill="#732824" opacity="0.3"/>
        ))}
      </motion.g>
    </svg>
  );
}

// Star Rating Illustration
export function StarRatingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.6 }}
        >
          <path
            d={`M ${30 + i * 55} 50 L ${35 + i * 55} 60 L ${25 + i * 55} 60 Z M ${30 + i * 55} 60 L ${22 + i * 55} 67 L ${27 + i * 55} 58 Z M ${30 + i * 55} 60 L ${38 + i * 55} 67 L ${33 + i * 55} 58 Z M ${22 + i * 55} 67 L ${30 + i * 55} 75 L ${27 + i * 55} 68 Z M ${38 + i * 55} 67 L ${30 + i * 55} 75 L ${33 + i * 55} 68 Z`}
            fill="#bfa76a"
          />
          <motion.circle
            cx={30 + i * 55}
            cy="62"
            r="15"
            stroke="#bfa76a"
            strokeWidth="0.5"
            opacity="0.3"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
