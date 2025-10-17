"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import useScrollDirection from "@/app/hooks/useScrollDirection";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-[9999] bg-neutral-100/80 backdrop-blur-md border-b border-neutral-300"
      animate={{
        y: scrollDirection === "down" ? -100 : 0,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-neutral-800">
          CWM <span className="text-neutral-500">Care</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-neutral-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Action Button */}
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-neutral-800 text-white hover:bg-black transition duration-300 text-sm font-medium shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-neutral-700 focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className={`overflow-hidden bg-neutral-100 text-center flex flex-col gap-4 text-lg transition-all duration-300 ${
          isOpen ? "py-4 border-t border-neutral-300" : "py-0"
        } md:hidden`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-neutral-700 hover:text-black font-medium transition"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Button */}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mx-auto mt-2 px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-black transition duration-300 text-sm font-medium w-40"
        >
          Get Started
        </Link>
      </motion.div>
    </motion.nav>
  );
}
