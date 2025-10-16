"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  const videos = ["/1.mp4", "/2.mp4"];
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full flex items-center justify-start text-left text-white overflow-hidden">
      {/* Background Video */}
      <video
        key={videoIndex}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
        src={videos[videoIndex]}
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
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
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl">
          Welcome to{" "}
          <span className="font-semibold text-white">CWM Care with Marwan</span> — 
          providing dedicated nursing services you can trust.
        </p>
        <Link
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg"
        >
          Get in Touch
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevVideo}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-3 md:px-5 py-2 md:py-3 rounded-full backdrop-blur-md transition text-lg md:text-xl font-semibold"
      >
        ⬅
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-3 md:px-5 py-2 md:py-3 rounded-full backdrop-blur-md transition text-lg md:text-xl font-semibold"
      >
        ➡
      </button>
    </section>
  );
}
