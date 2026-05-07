'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '47+', label: 'Project selesai', color: 'text-teal' },
  { value: '12K', label: 'Followers socmed', color: 'text-pink' },
  { value: '3 th', label: 'Experience', color: 'text-amber' },
];

export function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 border-t border-white/5"
      style={{ background: 'rgba(17, 17, 24, 0.8)' }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs sm:text-sm font-medium text-white/30 uppercase letter-spacing tracking-widest mb-6 sm:mb-8">
          Numb3rs that speak
        </p>
        
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-2xl border"
              style={{
                background: 'rgba(13, 13, 18, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.07)',
              }}
            >
              <p className={`text-xl sm:text-2xl md:text-3xl font-syne font-bold mb-1 sm:mb-2 ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/40 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
