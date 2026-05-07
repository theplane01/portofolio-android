'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-bg-base/50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Bottom Nav */}
        <nav className="flex justify-around items-center mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-white/5">
          {[
            { icon: '🏠', label: 'Beranda' },
            { icon: '🛠', label: 'Project', active: true },
            { icon: '📄', label: 'Artikel' },
            { icon: '👤', label: 'Profil' },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.1 }}
              className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
                item.active ? 'text-teal' : 'text-white/40 hover:text-white/60'
              }`}
            >
              <span className="text-base sm:text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {item.active && (
                <div className="w-1 h-1 rounded-full bg-teal mt-1" />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex-1 max-w-xs h-px bg-white/7" />
          <p className="text-xs text-white/18 font-medium uppercase letter-spacing whitespace-nowrap">
            Vourel Oktofit Avin · Personal Branding Portfolio · 2025
          </p>
          <div className="flex-1 max-w-xs h-px bg-white/7" />
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-xs text-white/20 mt-6 sm:mt-8"
        >
          &copy; {currentYear} Vourel Oktofit Avin. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
