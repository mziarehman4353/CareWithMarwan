"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/nurse1.jpg",
  "/images/nurse2.jpg",
  "/images/nurse3.jpg",
  "/images/nurse4.jpg",
];

export default function Gallery() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <Image src={src} alt="CWM Gallery" width={400} height={300} className="object-cover w-full h-64" />
        </motion.div>
      ))}
    </div>
  );
}
