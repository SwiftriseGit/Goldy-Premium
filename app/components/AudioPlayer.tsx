"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showOwnerDetails, setShowOwnerDetails] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.5;

    // Function to start playing with sound
    const playWithSound = async () => {
      try {
        audio.muted = false;
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
        return true;
      } catch {
        // Try playing muted first, then unmute
        try {
          audio.muted = true;
          await audio.play();
          setTimeout(() => {
            audio.muted = false;
          }, 100);
          setTimeout(() => {
            audio.muted = false;
          }, 300);
          setTimeout(() => {
            audio.muted = false;
          }, 500);
          setIsPlaying(true);
          return true;
        } catch {
          return false;
        }
      }
    };

    // Try to play immediately
    playWithSound();

    // Try again after short delays
    setTimeout(() => playWithSound(), 100);
    setTimeout(() => playWithSound(), 500);

    // Fallback: play on any user interaction
    const handleInteraction = async () => {
      if (audio.paused) {
        const success = await playWithSound();
        if (success) {
          ["click", "touchstart", "scroll", "mousemove", "keydown"].forEach(
            (evt) => {
              document.removeEventListener(evt, handleInteraction);
            },
          );
        }
      }
    };

    ["click", "touchstart", "scroll", "mousemove", "keydown"].forEach(
      (event) => {
        document.addEventListener(event, handleInteraction, { passive: true });
      },
    );

    // Cleanup
    return () => {
      ["click", "touchstart", "scroll", "mousemove", "keydown"].forEach(
        (event) => {
          document.removeEventListener(event, handleInteraction);
        },
      );
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.volume = 0.5;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop muted playsInline preload="auto">
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Sound Control  */}
      <motion.button
        onClick={togglePlay}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-12 h-12 rounded-full bg-gradient-to-br from-[#bfa76a] to-[#8b7355] shadow-lg shadow-[#bfa76a]/30 flex items-center justify-center group hover:scale-110 transition-transform"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          // Volume On Icon
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Volume Off Icon
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}

        {/* Pulse animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#bfa76a]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.button>

      {/*
        Expand / Collapse Arrow Button
        - Purpose: Toggle the visibility of the Expandable Hotel Info Card (`isExpanded`).
        - Positioned fixed so it sits near the audio control for easy access.
      */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed right-4 top-1/2 translate-y-10 z-[100] w-12 h-12 rounded-full bg-gradient-to-br from-[#bfa76a] to-[#8b7355] shadow-lg shadow-[#bfa76a]/30 flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: isExpanded ? 180 : 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isExpanded ? "Close hotel info" : "Open hotel info"}
      >
        {/* Chevron Down Icon */}
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      {/*
        Expandable Hotel Info Card
        - Purpose: Slide-in side panel displaying detailed hotel info.
        - Trigger: `isExpanded` toggled by the arrow button above.
        - Animation: `framer-motion` + `AnimatePresence` handle enter/exit.
        - Layout: Fixed, scrollable content (keeps card usable on smaller screens).
        - Note: Owner image uses `/img1.jpg` from `public/`.
      */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed right-4 top-[15%] z-[99] w-96 max-h-[70vh] bg-gradient-to-br from-[#1a1a1a] to-[#2a2520] rounded-2xl shadow-2xl shadow-[#bfa76a]/20 border border-[#bfa76a]/30 overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#bfa76a] to-[#8b7355] p-4 sticky top-0 z-10">
              {/*
                Header layout: icon + title centered.
                - Icon: simple building/hotel SVG for visual cue.
                - Title: hotel name.
              */}
              <div className="flex items-center justify-center space-x-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 21h18v-2H3v2zm2-4h14V5H5v12zm2-10h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7z" />
                </svg>
                <h3 className="text-white font-bold text-xl">
                  Hotel Goldy Premium
                </h3>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mt-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-300 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Scrollable Card Content */}
            <div className="overflow-y-auto max-h-[calc(70vh-80px)] scrollbar-thin scrollbar-thumb-[#bfa76a] scrollbar-track-[#2a2520]">
              <div className="p-6 space-y-5">
                {/*
                  Owner Image
                  - Uses `/img1.jpg` from the `public/` folder.
                  - Keep it local to avoid external requests and ensure fast load.
                */}
                <div className="flex justify-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#bfa76a] shadow-lg">
                    <Image
                      src="/owner.png"
                      alt="Hotel Owner"
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/*
                  Owner Details Header
                  - Shows name and a small arrow to toggle more owner details inline.
                */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <h4 className="text-[#bfa76a] font-bold text-lg">
                     Miss.Minati Das
                    </h4>
                    <button
                      onClick={() => setShowOwnerDetails(!showOwnerDetails)}
                      aria-label={
                        showOwnerDetails
                          ? "Hide owner details"
                          : "Show owner details"
                      }
                      className="ml-2 p-1 rounded-full bg-transparent hover:bg-white/10"
                    >
                      <svg
                        className={`w-4 h-4 text-[#bfa76a] transform ${showOwnerDetails ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Conditionally revealed owner details */}
                  <AnimatePresence>
                    {showOwnerDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-gray-400 text-sm"
                      >
                        <p>Hotel Owner & Managing Director</p>
                        <p className="text-gray-500 text-xs italic">
                          10+ Years in the Hotel Goldy Premium .
                        </p>
                        <p className="text-gray-400 text-xs mt-2">
                          Based in Resort City — available for consultations and
                          events.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Hotel Section */}
                <div className="pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    About Us
                  </h5>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Experience unparalleled luxury at Hotel Goldy Premium, where
                    timeless elegance meets modern comfort. Our award-winning
                    establishment offers world-class amenities, exceptional
                    service, and breathtaking views that create unforgettable
                    memories for every guest.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3">
                    Contact Information
                  </h5>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-[#bfa76a] shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold">
                        Address
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        LIC Office, Near Branch, Near JMD Dhaba, Back Side,
                        <br />
                        Lingaraj Nagar, Jeypore,
                        <br />
                        Odisha 764002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-[#bfa76a] shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold">Phone</p>
                      <p className="text-gray-400 text-xs">
                        Main: +91 89849 09990
                      </p>
                      <p className="text-gray-400 text-xs">
                        Reservations: +91 89849 09991
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-[#bfa76a] shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold">Email</p>
                      <p className="text-gray-400 text-xs">
                        hotelgoldypremium@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="pt-4 border-t border-[#bfa76a]/30">
                  <p className="text-gray-400 text-xs text-center italic mb-2">
                    “Luxury redefined, comfort perfected”
                  </p>
                  <p className="text-gray-500 text-xs text-center">
                    Established Since 2016 - Serving Excellence for Over 10+
                    Years
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
