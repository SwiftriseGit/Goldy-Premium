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
      
    </>
  );
}
