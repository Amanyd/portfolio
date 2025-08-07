"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants: Variants = {
    open: {
      opacity: 1,
      y: [-12, 2, 0],
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.05,
      },
    },
    closed: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -5 },
  };

  return (
    <>
      
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl
        bg-white/5 backdrop-blur-md border border-white/10
        rounded-xl px-6 py-3 flex items-center justify-between
        text-gray-200 z-50"
      >
        <div className="font-bold text-lg text-gray-100">Aman's portfolio</div>

        
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-gray-100 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      <AnimatePresence>
        {isOpen && (
            <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className=" fixed top-[72px] left-1/2 -translate-x-1/2 w-[90%] max-w-5xl p-4 
            bg-white/5 backdrop-blur-md border border-white/10 
            flex flex-col gap-4 md:hidden rounded-xl z-40"

            >
                {navLinks.map((link) => (
                    <motion.a
                    key={link.name}
                    href={link.href}
                    variants={linkVariants}
                    className="text-gray-300 hover:text-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </motion.a>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
