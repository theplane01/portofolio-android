import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      teal: '#14A7A0',
      pink: '#F76B8A',
      amber: '#F7C35A',
      'primary-teal': '#14A7A0',
      'primary-pink': '#F76B8A',
      'primary-yellow': '#FACC15',
    },
    backgroundColor: {
      'base': '#080810',
      'card': '#0D0D12',
      'elevated': '#111118',
      'surface': '#1A1A24',
      'dark-bg': '#0D0D0D',
      'dark-card': '#111827',
      'brand-teal': '#14A7A0',
      'brand-pink': '#F76B8A',
      'brand-amber': '#F7C35A',
    },
    textColor: {
      white: '#ffffff',
      'primary-teal': '#14A7A0',
      'primary-pink': '#F76B8A',
      'primary-yellow': '#FACC15',
    },
    borderColor: {
      'primary-teal': '#14A7A0',
      'primary-pink': '#F76B8A',
      'primary-yellow': '#FACC15',
    },
    fontFamily: {
      space: ['var(--font-space-grotesk)'],
      jakarta: ['var(--font-plus-jakarta)'],
      syne: ['Syne', 'sans-serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
    },
    boxShadow: {
      'glow-teal': '0 0 0 6px rgba(20, 167, 160, 0.06), 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(20, 167, 160, 0.05)',
      'glow-teal-hover': '0 0 0 6px rgba(20, 167, 160, 0.1), 0 32px 70px rgba(0, 0, 0, 0.6), 0 0 100px rgba(20, 167, 160, 0.08)',
    },
  },
  plugins: [],
}
export default config
