"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5, // Each starts slightly after the other
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Optional Overlay for coolness */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
