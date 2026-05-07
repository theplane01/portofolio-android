import {
  Navbar,
  Hero,
  SocialProof,
  ContentPreview,
  FreeResources,
  ProjectShowcase,
  MentoringCTA,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg-base">
      <Navbar />
      <Hero />
      <SocialProof />
      <ContentPreview />
      <FreeResources />
      <ProjectShowcase />
      <MentoringCTA />
      <Footer />
    </main>
  );
}
