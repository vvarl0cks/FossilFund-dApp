
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Gem, Bone, Leaf } from 'lucide-react'; // Lucide icons

interface Opportunity {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  potentialReturn: string;
  imageSrc: string;
  imageHint: string;
}

const opportunities: Opportunity[] = [
  { 
    id: '1', 
    title: 'Amber Deposits', 
    description: 'Invest in ethically sourced amber specimens containing rare inclusions, offering high paleontological and market value.', 
    icon: Gem, 
    potentialReturn: 'Est. 12-18% Annually', 
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'amber fossil'
  },
  { 
    id: '2', 
    title: 'Vertebrate Collections', 
    description: 'Acquire shares in curated collections of significant vertebrate fossils, from dinosaurs to early mammals.', 
    icon: Bone, 
    potentialReturn: 'Est. 10-15% Annually',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'dinosaur bone'
  },
  { 
    id: '3', 
    title: 'Paleobotanical Assets', 
    description: 'Diversify with investments in exceptionally preserved plant fossils, including fossilized wood and leaves.', 
    icon: Leaf, 
    potentialReturn: 'Est. 8-12% Annually',
    imageSrc: 'https://placehold.co/400x300.png',
    imageHint: 'leaf fossil'
  },
];

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Investment Opportunities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore curated fossil investment opportunities with high potential returns.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((op) => (
            <Card key={op.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image 
                  src={op.imageSrc} 
                  alt={op.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={op.imageHint}
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <op.icon className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold">{op.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {op.description}
                </CardDescription>
                <p className="mt-4 text-base font-medium text-primary">{op.potentialReturn}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
