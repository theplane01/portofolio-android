'use client';

import { motion } from 'framer-motion';

const contents = [
  {
    id: 1,
    icon: '⚡',
    type: 'Thread',
    typeColor: 'text-teal',
    title: 'Next.js 15 App Router buat pemula',
    views: '1.2K views',
    badge: 'Tutorial',
    bg: 'linear-gradient(135deg, #0D2E2D, #1A4E4C)',
  },
  {
    id: 2,
    icon: '🎯',
    type: 'Video',
    typeColor: 'text-pink',
    title: 'Cara gue debug tanpa panik',
    views: '890 views',
    badge: 'Tips',
    bg: 'linear-gradient(135deg, #2E1220, #4E1F38)',
  },
  {
    id: 3,
    icon: '🛠',
    type: 'Blog',
    typeColor: 'text-amber',
    title: 'Setup VSCode biar nggak lemot',
    views: '2.1K views',
    badge: 'Tool',
    bg: 'linear-gradient(135deg, #1A1A0D, #2E2E1A)',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ContentPreview() {
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
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-syne font-bold text-white">✨ Konten Terbaru</h3>
          <a href="#" className="text-xs sm:text-sm text-teal font-medium hover:opacity-70 transition">
            Lihat semua →
          </a>
        </div>

        {/* Content Cards - Horizontal on mobile, Grid on desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {contents.map((content) => (
            <motion.div
              key={content.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all border"
              style={{
                background: 'rgba(26, 26, 36, 0.8)',
                borderColor: 'rgba(255, 255, 255, 0.07)',
              }}
            >
              {/* Thumbnail */}
              <div
                className="h-16 sm:h-20 flex items-center justify-center text-3xl sm:text-4xl relative overflow-hidden"
                style={{ background: content.bg }}
              >
                {content.icon}
                <span 
                  className="absolute top-1.5 left-1.5 text-xs font-medium px-2 py-1 rounded-lg"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {content.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-3 sm:p-4">
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${content.typeColor}`}>
                  {content.type}
                </p>
                <p className="text-xs sm:text-sm font-medium text-white/85 line-clamp-2 mb-2">
                  {content.title}
                </p>
                <p className="text-xs text-white/40">
                  {content.views}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pinned Post Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-syne font-bold text-white">📌 Pinned Post</h3>
          </div>

          <motion.div
            whileHover={{ borderColor: 'rgba(20, 167, 160, 0.4)' }}
            className="p-3 sm:p-4 rounded-2xl cursor-pointer transition-all border flex gap-3 sm:gap-4"
            style={{
              background: 'rgba(26, 26, 36, 0.5)',
              borderColor: 'rgba(20, 167, 160, 0.2)',
            }}
          >
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
              style={{ background: 'rgba(20, 167, 160, 0.15)' }}
            >
              🔥
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-bold uppercase text-teal mb-1">Hot take</p>
              <p className="text-xs sm:text-sm font-medium text-white/85 mb-2 line-clamp-2">
                "Junior yang nulis docs itu 10x lebih valuable dari yang cuma bisa coding."
              </p>
              <p className="text-xs text-white/40 mb-2">— @vourel · 847 likes</p>
              <div className="flex gap-4 sm:gap-6 text-xs text-white/40">
                <div className="cursor-pointer hover:text-pink transition">❤️ 847</div>
                <div className="cursor-pointer hover:text-teal transition">💬 124</div>
                <div className="cursor-pointer hover:text-teal transition">📤 203</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
