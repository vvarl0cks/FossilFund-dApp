import Link from 'next/link';
import { FileText } from 'lucide-react';

// X/Twitter Icon SVG Component (copied from Navbar for reusability)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center bg-background">
      <p className="text-sm text-muted-foreground mb-4">
        © 2025 FossilFund ・ All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="https://x.com/FossilFund" target="_blank" rel="noopener noreferrer" passHref>
          <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" aria-label="FossilFund on X/Twitter">
            <XIcon className="h-5 w-5" />
          </span>
        </Link>
        <Link href="https://fossils-organization-1.gitbook.io/fossilfund-litepaper-v1/" target="_blank" rel="noopener noreferrer" passHref>
          <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" aria-label="FossilFund Documentation">
            <FileText className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </footer>
  );
}
