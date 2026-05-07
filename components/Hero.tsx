'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section 
      className="relative pt-24 md:pt-32 px-4 sm:px-6 md:px-8 w-full"
      style={{ 
        background: 'linear-gradient(160deg, #0F1F1F 0%, #0D0D12 65%)',
      }}
    >
      {/* Gradient Glows */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20, 167, 160, 0.3), transparent)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247, 107, 138, 0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {/* Status Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8"
            style={{
              background: 'rgba(20, 167, 160, 0.15)',
              border: '1px solid rgba(20, 167, 160, 0.3)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs sm:text-sm text-teal font-medium">Open for collab 🤝</span>
          </motion.div>

          {/* Avatar Row */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-teal/30">
              <Image
                src="/images/profile.jpg"
                alt="Vourel Oktofit Avin"
                fill
                className="object-cover"
              />
              <div 
                className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-bg-card"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base font-syne font-bold text-white">Vourel Oktofit Avin</p>
              <p className="text-xs sm:text-sm text-white/55">
                Full-Stack Dev · <span className="text-pink">Open for collab 🤝</span>
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syne font-bold leading-tight mb-4 sm:mb-6 text-white"
          >
            Nulis kode,<br />
            <em className="text-teal font-bold not-italic">build produk</em>, &<br />
            <span className="text-pink">nggak nyerah.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mb-6 sm:mb-8 leading-relaxed"
          >
            Developer indie asal Indonesia yang percaya bahwa kode yang bagus itu bisa sekaligus estetik dan works di production 🚀
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            {['Next.js', 'TypeScript', 'PostgreSQL', 'UI/UX', 'Open Source'].map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-full font-medium border ${
                  idx % 2 === 0
                    ? 'bg-teal/15 text-teal border-teal/30'
                    : idx === 1
                    ? 'bg-pink/15 text-pink border-pink/30'
                    : 'bg-white/7 text-white/45 border-white/10'
                }`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 sm:flex-initial px-6 py-2.5 sm:py-3 rounded-xl font-syne font-bold text-sm text-white flex items-center justify-center gap-2 transition-all"
              style={{
                background: 'linear-gradient(90deg, #14A7A0, #1BC8C0)',
              }}
            >
              💼 Lihat Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 sm:flex-initial px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm text-white/60 transition-all border"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.12)',
                background: 'rgba(255, 255, 255, 0.06)',
              }}
            >
              📨 Ngobrol yuk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Social Stats (Mobile only) */}
      <div className="md:hidden mt-8 mb-4 px-4">
        <div className="flex justify-between items-center gap-4 bg-bg-elevated/50 backdrop-blur rounded-2xl p-4 border border-white/5">
          <div className="text-center flex-1">
            <p className="text-lg sm:text-xl font-syne font-bold text-teal">47+</p>
            <p className="text-xs text-white/40">Project selesai</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center flex-1">
            <p className="text-lg sm:text-xl font-syne font-bold text-pink">12K</p>
            <p className="text-xs text-white/40">Followers</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center flex-1">
            <p className="text-lg sm:text-xl font-syne font-bold text-amber">3 th</p>
            <p className="text-xs text-white/40">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
