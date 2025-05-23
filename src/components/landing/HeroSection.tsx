
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-card py-20 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background representing fossils and investment"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="geological strata"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Investing in Our Planet's <span className="text-primary">Legacy</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
          FossilFund provides unique opportunities to invest in carefully selected fossil assets, balancing historical significance with potential returns. Discover a new class of tangible investments.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <a href="#opportunities">Explore Opportunities</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
             <a href="#mission">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
