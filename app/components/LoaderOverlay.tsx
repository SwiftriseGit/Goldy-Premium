"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoaderOverlay() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-linear-to-br from-[#732824] via-[#8B3A35] to-[#4a1a18] px-4 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }}
        transition={{ duration: 0.8, delay: loading ? 0 : 0.3 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#bfa76a] opacity-20 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#ffe9b0] opacity-20 blur-[120px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-md">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="relative"
          >
            <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
              <Image
                src="/LOGO (1).png"
                alt="Hotel Goldy logo"
                width={280}
                height={280}
                className="w-44 h-44 scale-125 object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl sm:text-4xl font-black text-white mb-2 tracking-wider">Hotel Goldy</h1>
            <p className="text-[#bfa76a] text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">Premium Experience</p>
          </motion.div>

          <motion.span
            className="inline-flex items-center gap-2 bg-[#bfa76a]/20 border border-[#bfa76a] text-[#bfa76a] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6 backdrop-blur-sm shadow"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] inline-block animate-pulse" />
            Welcome to Hotel Goldy Premium
            <span className="w-1.5 h-1.5 rounded-full bg-[#bfa76a] inline-block animate-pulse" />
          </motion.span>

          <div className="w-full max-w-xs sm:max-w-sm h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-linear-to-r from-[#bfa76a] via-[#ffe9b0] to-[#bfa76a] rounded-full shadow-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.p
            className="text-white/60 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading luxury experience... {loadingProgress}%
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-4 sm:top-8 right-4 sm:right-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#bfa76a] opacity-30 blur-[60px] z-999 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="fixed bottom-0 left-0 w-full h-4 sm:h-6 z-999 pointer-events-none"
        animate={{ background: [
          "linear-gradient(90deg, #bfa76a 0%, #ffe9b0 50%, #bfa76a 100%)",
          "linear-gradient(90deg, #ffe9b0 0%, #bfa76a 50%, #ffe9b0 100%)",
          "linear-gradient(90deg, #bfa76a 0%, #ffe9b0 50%, #bfa76a 100%)"
        ] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ boxShadow: "0 0 32px 8px #bfa76a, 0 0 64px 16px #ffe9b0" }}
      />
    </>
  );
}
