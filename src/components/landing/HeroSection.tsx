
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const InfoBox = ({ text }: { text: string }) => (
  <div className="bg-card p-6 rounded-lg border border-border shadow-md text-center">
    <p className="text-lg font-semibold text-card-foreground">{text}</p>
  </div>
);

export default function HeroSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <Image
              src="/fossil-logo.png" 
              alt="FossilFund Mascot - Dinosaur Scientist with Coin"
              width={420}
              height={420}
              className="rounded-lg"
              data-ai-hint="dinosaur scientist coin"
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-6 font-sans">
              FossilFund
            </h1>
            <p className="text-lg font-bold text-foreground mb-4 max-w-xl mx-auto md:mx-0">
              FossilFund lets you put your crypto to work by supporting cutting-edge AI research to bring back extinct species like the dire wolf.
            </p>
            <p className="text-lg font-bold text-foreground max-w-xl mx-auto md:mx-0">
              Lock your $FOS, earn real returns, and be part of a movement that's rewriting the future of life on Earth.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 max-w-2xl mx-auto">
            <span className="font-sans">Stake your $FOS to generate yield and support research on reviving extinct species</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <InfoBox text="100% Fair Launch" />
            <InfoBox text="4% APY" />
            <InfoBox text="Lock & Earn" />
          </div>
        </div>
      </div>
    </section>
  );
}
