
import Image from 'next/image';
import { Zap, Target, ShieldCheck } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission & Philosophy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At FossilFund, we are dedicated to preserving history while creating value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Fossil excavation site" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl aspect-[3/2] object-cover"
              data-ai-hint="fossil excavation" 
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2 flex items-center">
                <Target className="w-6 h-6 mr-2 text-primary" />
                Preservation First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the ethical sourcing and meticulous preservation of fossil assets. Our investments contribute to the scientific understanding and public appreciation of natural history, ensuring these treasures are protected for future generations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-primary" />
                Strategic Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                FossilFund identifies assets with strong potential for appreciation. Our expert team employs a rigorous due diligence process, focusing on rarity, condition, and historical significance to maximize investor returns.
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-accent mb-2 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-primary" />
                Investor Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparency and integrity are the cornerstones of our operations. We provide our investors with detailed information and regular updates, fostering a relationship built on trust and shared success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
