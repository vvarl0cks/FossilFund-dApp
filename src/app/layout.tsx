
import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import WalletProvider from '@/components/WalletProvider'; // Import the WalletProvider

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
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <WalletProvider> {/* Wrap children with WalletProvider */}
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
