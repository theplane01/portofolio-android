'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-bg-base/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl font-syne font-bold bg-gradient-to-r from-teal to-pink bg-clip-text text-transparent"
        >
          VOA.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-white/60 hover:text-white transition">
            Projects
          </Link>
          <Link href="#resources" className="text-sm text-white/60 hover:text-white transition">
            Resources
          </Link>
          <Link href="#mentoring" className="text-sm text-white/60 hover:text-white transition">
            Mentoring
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex gradient-teal-pink px-6 py-2 rounded-full font-medium text-white text-sm items-center gap-2 bg-gradient-to-r from-teal to-pink"
        >
          Let&apos;s Collaborate
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-bg-base/95 backdrop-blur-md"
        >
          <div className="px-4 py-4 space-y-4">
            <Link href="#projects" className="block text-sm text-white/60 hover:text-white transition">
              Projects
            </Link>
            <Link href="#resources" className="block text-sm text-white/60 hover:text-white transition">
              Resources
            </Link>
            <Link href="#mentoring" className="block text-sm text-white/60 hover:text-white transition">
              Mentoring
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-teal to-pink px-6 py-2 rounded-full font-medium text-white text-sm flex items-center justify-center gap-2"
            >
              Let&apos;s Collaborate
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
