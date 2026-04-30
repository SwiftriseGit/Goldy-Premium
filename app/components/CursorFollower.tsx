"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const visible = useMotionValue(0);

  // Spring-smoothed positions (different stiffness per layer)
  const glowSpX = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.5 });
  const glowSpY = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.5 });
  const trailSpX = useSpring(cursorX, { damping: 40, stiffness: 150, mass: 0.8 });
  const trailSpY = useSpring(cursorY, { damping: 40, stiffness: 150, mass: 0.8 });
  const dotSpX = useSpring(cursorX, { damping: 50, stiffness: 500, mass: 0.1 });
  const dotSpY = useSpring(cursorY, { damping: 50, stiffness: 500, mass: 0.1 });

  // Centering offsets via derived transforms (no re-renders)
  const glowX = useTransform(glowSpX, (x) => x - 30);
  const glowY = useTransform(glowSpY, (y) => y - 30);
  const trailX = useTransform(trailSpX, (x) => x - 15);
  const trailY = useTransform(trailSpY, (y) => y - 15);
  const dotX = useTransform(dotSpX, (x) => x - 4);
  const dotY = useTransform(dotSpY, (y) => y - 4);

  useEffect(() => {
    // Skip on touch/mobile devices — no cursor to follow
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      visible.set(1);
    };
    const handleMouseLeave = () => visible.set(0);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          opacity: visible,
          background: "radial-gradient(circle, rgba(191, 167, 106, 0.6) 0%, rgba(191, 167, 106, 0.3) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      >
        <div className="w-60 h-60" />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          opacity: visible,
          background: "radial-gradient(circle, rgba(255, 233, 176, 0.4) 0%, rgba(255, 233, 176, 0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      >
        <div className="w-80 h-80" />
      </motion.div>

      {/* Small center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-[#bfa76a] shadow-lg shadow-[#bfa76a]/50" />
      </motion.div>
    </>
  );
}
