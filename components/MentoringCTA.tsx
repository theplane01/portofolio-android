'use client';

import { motion } from 'framer-motion';

export function MentoringCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 border-t border-white/5"
      style={{ background: 'rgba(13, 13, 18, 0.8)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-syne font-bold text-white">🧑‍💻 Mentoring 1-on-1</h3>
        </div>

        {/* Mentoring Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 167, 160, 0.1) 0%, rgba(247, 107, 138, 0.07) 100%)',
            borderColor: 'rgba(20, 167, 160, 0.22)',
          }}
        >
          {/* Decorative glow */}
          <div 
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(247, 107, 138, 0.3), transparent)' }}
          />

          <div className="relative z-10">
            {/* Emoji & Title */}
            <div className="mb-6 sm:mb-8">
              <p className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧑‍💻</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-white mb-2">
                Mentoring 1-on-1<br />
                <span className="text-pink">bareng gue, yuk!</span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/60 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Stuck di project? Mau transisi jadi dev? Atau cuma butuh teman diskusi yang nggak judgmental soal kode jelek kamu? 😂
            </p>

            {/* Perks */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {['⏱ 60 menit', '🎯 Goal-based', '💬 Bahasa Indo'].map((perk, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 rounded-full border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.55)',
                  }}
                >
                  {perk}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-syne font-bold text-sm text-white mb-6 sm:mb-8 transition-all"
              style={{
                background: 'linear-gradient(90deg, #14A7A0, #1BC8C0)',
              }}
            >
              Book Session — Gratis Trial! 🚀
            </motion.button>

            {/* Social Handles */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 justify-center sm:justify-start">
              {[
                { dot: 'bg-teal', handle: '@vourel_dev' },
                { dot: 'bg-pink', handle: 'vourel.id' },
                { dot: 'bg-white/30', handle: 'LinkedIn' },
              ].map((social, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/40 cursor-pointer hover:text-white/60 transition">
                  <div className={`w-2 h-2 rounded-full ${social.dot}`} />
                  {social.handle}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
