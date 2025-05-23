
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FossilFund. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" passHref>
              <span aria-label="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer">
                <Facebook className="h-5 w-5" />
              </span>
            </Link>
            <Link href="#" passHref>
              <span aria-label="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer">
                <Twitter className="h-5 w-5" />
              </span>
            </Link>
            <Link href="#" passHref>
              <span aria-label="LinkedIn" className="text-muted-foreground hover:text-primary cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center md:text-left">
          Disclaimer: Investments in fossils involve risks, including illiquidity and potential loss of principal. Past performance is not indicative of future results. Consult with a financial advisor before investing.
        </p>
      </div>
    </footer>
  );
}
