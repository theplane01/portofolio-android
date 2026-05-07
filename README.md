# Vourel Oktofit Avin - Personal Portfolio 🚀

A modern, high-performance **Next.js 14** personal branding portfolio website for Vourel Oktofit Avin, a Gen Z Indonesian developer and content creator. Built with cutting-edge technologies for a polished, app-like experience.

## 🎯 Features

✨ **Modern Design**
- Dark theme with teal (#14A7A0) and pink (#F76B8A) accent colors
- Responsive mobile-first design
- Smooth scroll reveal animations with Framer Motion
- Glass-morphism effects and glowing borders

🎨 **Sections**
1. **Sticky Navbar** - Fixed navigation with blur effect and CTA button
2. **Hero Section** - Two-column layout with personalized copywriting and floating badges
3. **Social Proof** - Auto-scrolling marquee with stats and achievements
4. **Content Preview** - Instagram/TikTok style feed cards with engagement metrics
5. **Free Resources** - Downloadable templates and guides with badges
6. **Project Showcase** - Featured projects with tech stack and GitHub/Demo links
7. **Mentoring CTA** - Full-width gradient section with call-to-action
8. **Footer** - Complete footer with links and social connections

🛠️ **Technology Stack**
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for scroll & hover effects
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings) + Plus Jakarta Sans (body)
- **Language**: TypeScript

## 📁 Project Structure

```
portofolio-android/
├── app/
│   ├── layout.tsx          # Root layout with font setup
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with CTA
│   ├── SocialProof.tsx     # Marquee stats section
│   ├── ContentPreview.tsx   # Content grid
│   ├── FreeResources.tsx    # Resources cards
│   ├── ProjectShowcase.tsx  # Projects display
│   ├── MentoringCTA.tsx     # Mentoring section
│   ├── Footer.tsx           # Footer
│   └── index.ts            # Components export
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Teal | `#14A7A0` | Primary accent, links |
| Pink | `#F76B8A` | Secondary accent, highlights |
| Yellow | `#FACC15` | Badge/free labels |
| Dark BG | `#0D0D0D` | Main background |
| Card | `#111827` | Card backgrounds |

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0+ 
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000`

## 📝 Customization Guide

### Update Personal Info
Edit `components/Hero.tsx`:
- Change heading text
- Update social links
- Modify badge content

### Add Projects
Edit `components/ProjectShowcase.tsx`:
- Add new project objects to the `projects` array
- Update tech stack and descriptions
- Link to GitHub & live demos

### Modify Content
Edit `components/ContentPreview.tsx`:
- Update content cards
- Change view counts and engagement metrics

### Change Colors
Edit `tailwind.config.ts` or update hex values in components:
- Primary teal: `#14A7A0`
- Secondary pink: `#F76B8A`
- Background: `#0D0D0D`
- Cards: `#111827`

### Add Resources
Edit `components/FreeResources.tsx`:
- Add new resource objects
- Update download links

## 🎬 Animations

The portfolio uses Framer Motion for:
- Scroll reveal animations (whileInView)
- Hover effects on buttons and cards
- Staggered animations for lists
- Auto-scrolling marquee in Social Proof section

## 📱 Responsive Design

- **Mobile**: Single column layouts, optimized touch targets
- **Tablet**: Two-column sections where applicable
- **Desktop**: Full multi-column layouts with enhanced spacing

## 🔧 Build & Deploy

### Production Build
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
The project is optimized for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- GitHub Pages

## 📦 Dependencies

- **next**: ^16.2.5
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **framer-motion**: Latest
- **lucide-react**: ^1.14.0
- **tailwindcss**: Latest
- **typescript**: Latest

## 🎯 Performance

- ✅ Server-side rendering with Next.js
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ CSS minification via Tailwind
- ✅ Optimized client-side interactivity

## 📄 License

© 2024 Vourel Oktofit Avin. All rights reserved.

## 🤝 Contributing

For suggestions or improvements, please contact Vourel Oktofit Avin directly.

---

**Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion**
