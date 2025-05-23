
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
      {children}
    </span>
  </Link>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <span className="text-2xl font-bold font-serif text-primary cursor-pointer">
            FossilFund
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#mission">Mission</NavLink>
          <NavLink href="#opportunities">Opportunities</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#newsletter">Newsletter</NavLink>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4 sm:px-6 lg:px-8">
            <NavLink href="#mission">Mission</NavLink>
            <NavLink href="#opportunities">Opportunities</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#newsletter">Newsletter</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
