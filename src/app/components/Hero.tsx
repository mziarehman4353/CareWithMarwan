"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const videos = ["/1.mp4", "/2.mp4"];
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % videos.length);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start text-left text-white overflow-hidden">
      {/* Background Video */}
      <video
        key={videoIndex}
        src={videos[videoIndex]}
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Text Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-3xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug drop-shadow-lg">
          <TypeAnimation
            sequence={[
              "“Caring is the essence of nursing.”",
              2000,
              "“Healing with compassion and professionalism.”",
              2000,
              "“Your health, our priority — always.”",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed drop-shadow-md">
          Welcome to{" "}
          <span className="font-semibold text-white">
            CWM Care with Marwan
          </span>{" "}
          — providing dedicated nursing services you can trust.
        </p>

        <Link
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-blue-500/30"
        >
          Get in Touch
        </Link>
      </div>

      {/* Next Video Button */}
      <button
        onClick={nextVideo}
        aria-label="Next video"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 md:p-4 rounded-full transition"
      >
        <ChevronRight className="text-white w-6 h-6 md:w-7 md:h-7" />
      </button>
    </section>
  );
}
