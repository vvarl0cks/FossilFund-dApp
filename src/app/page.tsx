
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import { Toaster } from "@/components/ui/toaster";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Toaster />
      {/* Footer removed as per new design */}
    </div>
  );
}
