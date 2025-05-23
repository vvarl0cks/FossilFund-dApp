
import type {Metadata} from 'next';
import { Inter } from 'next/font/google'
import { Geist_Mono } from 'geist/font/mono'; // Added import for Geist_Mono
import './globals.css';
// Removed import for Providers as it's related to a rolled-back SDK

const inter = Inter({
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FossilFund',
  description: 'FossilFund: Bringing Back Extinct Species with Crypto.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>,) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistMono.variable}`}> {/* Added geistMono.variable */}
        {/* Removed Providers wrapper */}
        {children}
      </body>
    </html>
  );
}
