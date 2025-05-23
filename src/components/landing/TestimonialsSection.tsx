
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: '1',
    quote: "FossilFund's expertise in sourcing rare finds is unmatched. My portfolio has seen significant growth thanks to their strategic approach.",
    author: 'Dr. Eleanor Vance',
    role: 'Paleontologist & Investor',
    avatarFallback: 'EV',
    imageHint: 'scientist portrait'
  },
  {
    id: '2',
    quote: "Investing in fossils felt niche, but FossilFund made it accessible and profitable. Their transparency is commendable.",
    author: 'Marcus Chen',
    role: 'Tech Entrepreneur',
    avatarFallback: 'MC',
    imageHint: 'business person'
  },
  {
    id: '3',
    quote: "As a long-time collector, I appreciate FossilFund's commitment to preservation and ethical sourcing. A trustworthy partner.",
    author: 'Sophia Miller',
    role: 'Art Curator & Investor',
    avatarFallback: 'SM',
    imageHint: 'curator portrait'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Success Stories from Our Investors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our valued partners have to say about their FossilFund experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarFallback={testimonial.avatarFallback}
              imageHint={testimonial.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
