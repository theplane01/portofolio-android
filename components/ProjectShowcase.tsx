'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    icon: '🌐',
    name: 'SatuPlatform — SaaS Indie',
    techs: ['Next.js', 'Supabase', 'Stripe'],
    live: true,
    featured: true,
    color: 'linear-gradient(135deg, #0A2A2A, #14453F)',
  },
  {
    id: 2,
    icon: '💬',
    name: 'ChatKita',
    techs: ['React', 'WebSocket'],
    live: false,
    featured: false,
    color: 'linear-gradient(135deg, #1F0A1A, #401428)',
  },
  {
    id: 3,
    icon: '📊',
    name: 'DevMetrics',
    techs: ['Vue', 'D3.js'],
    live: false,
    featured: false,
    color: 'linear-gradient(135deg, #0A1020, #142240)',
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

export function ProjectShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 border-t border-white/5"
      style={{ background: 'rgba(17, 17, 24, 0.8)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-syne font-bold text-white">🛠 Selected Projects</h3>
          <a href="#" className="text-xs sm:text-sm text-teal font-medium hover:opacity-70 transition">
            GitHub →
          </a>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl overflow-hidden cursor-pointer transition-all border ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              style={{
                background: 'rgba(26, 26, 36, 0.8)',
                borderColor: 'rgba(255, 255, 255, 0.07)',
              }}
            >
              {/* Thumbnail */}
              <div
                className={`flex items-center justify-center text-4xl sm:text-5xl ${
                  project.featured ? 'h-20 sm:h-24' : 'h-16 sm:h-20'
                }`}
                style={{ background: project.color }}
              >
                {project.icon}
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-syne font-bold text-white/85 mb-2">
                  {project.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-lg font-medium"
                      style={{
                        background: 'rgba(255, 255, 255, 0.07)',
                        color: 'rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.live && (
                    <span
                      className="text-xs px-2 py-1 rounded-lg font-medium"
                      style={{
                        background: 'rgba(20, 167, 160, 0.1)',
                        color: '#14A7A0',
                      }}
                    >
                      Live ✓
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
