'use client';

import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    icon: '📦',
    title: 'Next.js Starter Template',
    description: 'Auth + DB + UI siap pakai',
    badge: 'FREE',
    badgeColor: 'teal',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Figma Design System Kit',
    description: '100+ komponen siap pakai',
    badge: 'NEW',
    badgeColor: 'pink',
  },
  {
    id: 3,
    icon: '📋',
    title: 'TypeScript Cheatsheet',
    description: 'Semua syntax yang sering lupa',
    badge: 'FREE',
    badgeColor: 'teal',
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Deploy Checklist (Vercel)',
    description: 'Biar prod nggak down lagi 😅',
    badge: 'FREE',
    badgeColor: 'teal',
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

export function FreeResources() {
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
          <h3 className="text-base sm:text-lg font-syne font-bold text-white">🎁 Resource Gratis</h3>
          <a href="#" className="text-xs sm:text-sm text-teal font-medium hover:opacity-70 transition">
            All 28 items →
          </a>
        </div>

        {/* Resources List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="space-y-3 sm:space-y-4"
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              variants={item}
              whileHover={{ x: 4 }}
              className="p-3 sm:p-4 rounded-2xl cursor-pointer transition-all border flex items-center gap-3 sm:gap-4"
              style={{
                background: 'rgba(26, 26, 36, 0.5)',
                borderColor: 'rgba(255, 255, 255, 0.06)',
              }}
            >
              {/* Icon */}
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{
                  background: resource.badgeColor === 'teal' 
                    ? 'rgba(20, 167, 160, 0.15)'
                    : resource.badgeColor === 'pink'
                    ? 'rgba(247, 107, 138, 0.15)'
                    : 'rgba(247, 195, 90, 0.15)',
                }}
              >
                {resource.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-white/85 truncate">
                  {resource.title}
                </p>
                <p className="text-xs text-white/40 truncate">
                  {resource.description}
                </p>
              </div>

              {/* Badge */}
              <span 
                className="text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-full border whitespace-nowrap flex-shrink-0"
                style={{
                  background: resource.badgeColor === 'teal'
                    ? 'rgba(20, 167, 160, 0.15)'
                    : 'rgba(247, 107, 138, 0.15)',
                  color: resource.badgeColor === 'teal' ? '#14A7A0' : '#F76B8A',
                  borderColor: resource.badgeColor === 'teal'
                    ? 'rgba(20, 167, 160, 0.3)'
                    : 'rgba(247, 107, 138, 0.3)',
                }}
              >
                {resource.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
