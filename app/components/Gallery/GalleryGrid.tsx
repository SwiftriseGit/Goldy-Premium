"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa";

export default function GalleryGrid({ images }: { images: { src: string; category: string; id: string }[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      layout
    >
      {images.map((item, i) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.988 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.988 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
          whileHover={{ y: -8 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.src}
              alt={`${item.category}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </motion.div>
      ))}
    </motion.div>
  );
}
