
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import MissionSection from '@/components/landing/MissionSection';
import OpportunitiesSection from '@/components/landing/OpportunitiesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import NewsletterSection from '@/components/landing/NewsletterSection';
import Footer from '@/components/landing/Footer';
import { Toaster } from "@/components/ui/toaster";


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <OpportunitiesSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
