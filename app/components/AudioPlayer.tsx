"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
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
          setTimeout(() => { audio.muted = false; }, 100);
          setTimeout(() => { audio.muted = false; }, 300);
          setTimeout(() => { audio.muted = false; }, 500);
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
          ['click', 'touchstart', 'scroll', 'mousemove', 'keydown'].forEach(evt => {
            document.removeEventListener(evt, handleInteraction);
          });
        }
      }
    };

    ['click', 'touchstart', 'scroll', 'mousemove', 'keydown'].forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    // Cleanup
    return () => {
      ['click', 'touchstart', 'scroll', 'mousemove', 'keydown'].forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
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
      audio.play()
        .then(() => { setIsPlaying(true); })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        muted
        playsInline
        preload="auto"
      >
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

      {/* Arrow Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed right-4 top-1/2 translate-y-10 z-[100] w-12 h-12 rounded-full bg-gradient-to-br from-[#bfa76a] to-[#8b7355] shadow-lg shadow-[#bfa76a]/30 flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: isExpanded ? 180 : 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
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

      {/* Expandable Hotel Info Card */}
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
              <h3 className="text-white font-bold text-xl text-center">
                Grand Luxury Hotel
              </h3>
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
                {/* Owner Image */}
                <div className="flex justify-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#bfa76a] shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                      alt="Hotel Owner"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Owner Details */}
                <div className="text-center space-y-2">
                  <h4 className="text-[#bfa76a] font-bold text-lg">
                    John Anderson
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hotel Owner & Managing Director
                  </p>
                  <p className="text-gray-500 text-xs italic">
                    30+ Years in Hospitality Industry
                  </p>
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
                    Experience unparalleled luxury at Grand Luxury Hotel, where
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
                        123 Luxury Avenue, Downtown District
                        <br />
                        Resort City, RC 12345
                        <br />
                        United States
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
                        Main: +1 (555) 123-4567
                      </p>
                      <p className="text-gray-400 text-xs">
                        Reservations: +1 (555) 123-4568
                      </p>
                      <p className="text-gray-400 text-xs">
                        Concierge: +1 (555) 123-4569
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
                        info@grandluxuryhotel.com
                      </p>
                      <p className="text-gray-400 text-xs">
                        reservations@grandluxuryhotel.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-[#bfa76a] shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold">
                        Website
                      </p>
                      <p className="text-gray-400 text-xs">
                        www.grandluxuryhotel.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Operating Hours
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">Check-in:</span>
                      <span className="text-white text-xs font-semibold">
                        3:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">Check-out:</span>
                      <span className="text-white text-xs font-semibold">
                        11:00 AM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">
                        Front Desk:
                      </span>
                      <span className="text-white text-xs font-semibold">
                        24/7
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">
                        Room Service:
                      </span>
                      <span className="text-white text-xs font-semibold">
                        24/7
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amenities & Services */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3">
                    Premium Amenities
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Free WiFi",
                      "Spa & Wellness",
                      "Swimming Pool",
                      "Fine Dining",
                      "Fitness Center",
                      "Parking",
                      "Concierge",
                      "Bar & Lounge",
                      "Conference Rooms",
                      "Airport Shuttle",
                      "Laundry Service",
                      "Pet Friendly",
                    ].map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-xs"
                      >
                        <svg
                          className="w-3 h-3 text-[#bfa76a]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-400">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards & Recognition */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Awards & Recognition
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#bfa76a] text-xs">🏆</span>
                      <p className="text-gray-400 text-xs">
                        Best Luxury Hotel 2025
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#bfa76a] text-xs">🏆</span>
                      <p className="text-gray-400 text-xs">
                        5-Star Excellence Award
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#bfa76a] text-xs">🏆</span>
                      <p className="text-gray-400 text-xs">
                        TripAdvisor Travelers&apos; Choice
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#bfa76a] text-xs">✓</span>
                      <p className="text-gray-400 text-xs">
                        Green Certified - Eco Friendly
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hotel Statistics */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3">
                    At a Glance
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#2a2520] p-3 rounded-lg border border-[#bfa76a]/20">
                      <p className="text-[#bfa76a] text-xl font-bold">150+</p>
                      <p className="text-gray-400 text-xs">Luxury Rooms</p>
                    </div>
                    <div className="bg-[#2a2520] p-3 rounded-lg border border-[#bfa76a]/20">
                      <p className="text-[#bfa76a] text-xl font-bold">30+</p>
                      <p className="text-gray-400 text-xs">Years Service</p>
                    </div>
                    <div className="bg-[#2a2520] p-3 rounded-lg border border-[#bfa76a]/20">
                      <p className="text-[#bfa76a] text-xl font-bold">500K+</p>
                      <p className="text-gray-400 text-xs">Happy Guests</p>
                    </div>
                    <div className="bg-[#2a2520] p-3 rounded-lg border border-[#bfa76a]/20">
                      <p className="text-[#bfa76a] text-xl font-bold">4.9/5</p>
                      <p className="text-gray-400 text-xs">Guest Rating</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-3 pt-4 border-t border-[#bfa76a]/30">
                  <h5 className="text-[#bfa76a] font-semibold text-sm mb-3">
                    Connect With Us
                  </h5>
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#2a2520] border border-[#bfa76a]/30 flex items-center justify-center hover:bg-[#bfa76a] transition-colors group">
                      <svg
                        className="w-5 h-5 text-[#bfa76a] group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#2a2520] border border-[#bfa76a]/30 flex items-center justify-center hover:bg-[#bfa76a] transition-colors group">
                      <svg
                        className="w-5 h-5 text-[#bfa76a] group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#2a2520] border border-[#bfa76a]/30 flex items-center justify-center hover:bg-[#bfa76a] transition-colors group">
                      <svg
                        className="w-5 h-5 text-[#bfa76a] group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#2a2520] border border-[#bfa76a]/30 flex items-center justify-center hover:bg-[#bfa76a] transition-colors group">
                      <svg
                        className="w-5 h-5 text-[#bfa76a] group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="pt-4 border-t border-[#bfa76a]/30">
                  <p className="text-gray-400 text-xs text-center italic mb-2">
                    &ldquo;Luxury redefined, comfort perfected&rdquo;
                  </p>
                  <p className="text-gray-500 text-xs text-center">
                    Established Since 1995 - Serving Excellence for Over 30
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
