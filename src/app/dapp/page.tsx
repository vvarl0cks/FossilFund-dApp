
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ConnectWallet from '@/components/ConnectWallet';

// Define a dummy portfolio data array for demonstration
const portfolioData = [
  {
    asset: 'SUI',
    amount: '1000',
    marketValue: '$1,200',
    address: '0x1234567890abcdef1234567890abcdef12345678',
  },
  {
    asset: 'USDC',
    amount: '5000',
    marketValue: '$5,000',
    address: '0xabcdef1234567890abcdef1234567890abcdef12',
  },
];

export default function DappPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 space-y-4 sm:space-y-0">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/fossil-logo.png"
              alt="FossilFund Logo"
              width={40}
              height={40}
              data-ai-hint="logo dinosaur"
              className="mr-2"
            />
            <h1 className="text-3xl font-bold text-primary ml-0 font-sans">FossilFund</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/community" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Community
            </Button>
          </Link>
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md border-primary text-primary">
            Fund
          </Button>
          <Link href="/report" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Report
            </Button>
          </Link>
          <ConnectWallet />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 flex-grow flex flex-col items-center">
        <section className="w-full max-w-4xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/fossil-logo.png"
                alt="FossilFund Mascot"
                width={420}
                height={420}
                className="rounded-lg"
                data-ai-hint="dinosaur scientist coin"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6 font-sans">
                FossilFund
              </h2>
              <p className="text-lg text-foreground mb-4">
                FossilFund is a DeSci meme token designed to support real-world research on reviving extinct animals, inspired by the successful resurrection of the dire wolf.
              </p>
              <p className="text-lg text-foreground">
                Managed by advanced AI, it lets users stake $FOS to earn rewards while actively contributing to scientific breakthroughs. Your crypto fuels the return of lost species.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-10 space-y-4 sm:space-y-0">
          <Button
            className="w-full sm:w-auto text-lg sm:text-xl font-semibold px-6 py-4 sm:px-10 sm:py-6 rounded-lg shadow-lg"
            size="lg"
          >
            Lock Your $FOS
          </Button>
          <div className="text-lg sm:text-xl font-semibold text-card-foreground bg-card px-4 py-3 sm:py-4 rounded-md shadow-sm text-center w-full sm:w-auto">
            AUM: $500,000,000 <span className="text-green-600 whitespace-nowrap">+50.00%</span>
          </div>
        </div>

        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-accent mb-6 text-center sm:text-left">Portfolio</h2>
          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Asset
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Market Value
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {portfolioData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-card-foreground">{item.asset}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.marketValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground truncate max-w-xs">{item.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
