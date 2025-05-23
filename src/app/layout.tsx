
import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Added variable for Inter
});

const robotoMono = Roboto_Mono({ // Added Roboto_Mono
  subsets: ['latin'],
  variable: '--font-roboto-mono', // Added variable for Roboto_Mono
  weight: ['400', '700'] // Specify weights if needed, or remove for all
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
        {children}
      </body>
    </html>
  );
}
