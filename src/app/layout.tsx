
import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import WalletProvider from '@/components/WalletProvider';
import Footer from '@/components/layout/Footer'; // Import the Footer component
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'FossilFund',
  description: 'FossilFund: Bringing Back Extinct Species with Crypto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>,) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans flex flex-col min-h-screen`}>
        <WalletProvider>
          <div className="flex-grow flex flex-col"> {/* Wrapper for children to grow and allow footer to be at bottom */}
            {children}
          </div>
          <Footer />
          <Toaster /> {/* Global Toaster */}
        </WalletProvider>
      </body>
    </html>
  );
}
