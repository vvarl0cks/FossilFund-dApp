
"use client";

import Link from 'next/link';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// X/Twitter Icon SVG Component
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // Changed to currentColor to inherit color
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <span className="flex items-center cursor-pointer">
            <Image
              src="/fossil-logo.png"
              alt="FossilFund Logo"
              width={40}
              height={40}
              className="mr-2"
              data-ai-hint="logo dinosaur"
            />
            <span className="text-3xl font-bold font-sans text-primary">FossilFund</span>
          </span>
        </Link>
        <nav className="flex items-center space-x-2"> {/* Adjusted space-x if needed */}
          <Button variant="ghost" size="icon" aria-label="Twitter / X">
            <XIcon className="h-6 w-6 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Documentation">
            <FileText className="h-6 w-6 text-foreground" />
          </Button>
          <Link href="/dapp" passHref>
            <Button
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md"
              size="lg"
            >
              Enter DApp
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
