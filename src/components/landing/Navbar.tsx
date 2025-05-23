
"use client";

import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  // Mobile menu state and toggle removed as new design is simpler
  // and doesn't show a hamburger menu.

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <span className="text-3xl font-bold font-sans text-primary cursor-pointer">
            FossilFund
          </span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Documentation">
            <FileText className="h-6 w-6 text-foreground" />
          </Button>
          <Button 
            className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md"
            size="lg"
          >
            Enter DApp
          </Button>
        </nav>
      </div>
    </header>
  );
}
