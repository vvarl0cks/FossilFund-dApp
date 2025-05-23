
"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !email.includes('@')) {
       toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
     toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
    setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Stay Informed
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Subscribe to our newsletter for the latest updates on fossil investments, market insights, and exclusive opportunities from FossilFund.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow text-base"
              aria-label="Email address for newsletter"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="mt-8 p-4 rounded-md bg-secondary/50 text-secondary-foreground flex items-center justify-center max-w-md mx-auto">
            <CheckCircle className="h-6 w-6 mr-2 text-primary" />
            <p>Thank you for subscribing!</p>
          </div>
        )}
      </div>
    </section>
  );
}
