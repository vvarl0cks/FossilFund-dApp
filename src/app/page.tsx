
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
// Toaster removed from here, it's now in layout.tsx

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      {/* Footer will be rendered by layout.tsx */}
      {/* Toaster is now globally available from layout.tsx */}
    </div>
  );
}
