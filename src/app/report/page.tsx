
"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import ConnectWallet from '@/components/ConnectWallet';

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sui Wallet Integration Test - Report
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <ConnectWallet />
        </div>
      </div>
    </main>
  );
}
            <Image
              src="/fossil-logo.png"
              alt="FossilFund Logo"
              width={40}
              height={40}
              data-ai-hint="logo dinosaur"
            />
            <h1 className="text-3xl font-bold text-primary ml-2 font-sans">FossilFund</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/community" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Community
            </Button>
          </Link>
          <Link href="/dapp" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Fund
            </Button>
          </Link>
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md border-primary text-primary">
            Report
          </Button>
          <Button className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-primary-foreground">Connect Wallet</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8 flex-grow">
        <section className="w-full max-w-4xl mb-12 mx-auto">
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

        <section className="w-full max-w-5xl mx-auto">
          <div className="w-fit mx-auto bg-card p-4 rounded-lg border border-border shadow-md flex items-center space-x-3 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-breathe"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-accent font-sans">
              Fund Sold from Portfolio to Date: $100,000
            </h2>
          </div>
          <Card className="shadow-lg rounded-lg bg-card">
            <CardContent className="p-0 md:p-2">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px] text-muted-foreground uppercase tracking-wider">Name</TableHead>
                      <TableHead className="text-muted-foreground uppercase tracking-wider">Research</TableHead>
                      <TableHead className="text-muted-foreground uppercase tracking-wider">Research</TableHead>
                      <TableHead className="text-right text-muted-foreground uppercase tracking-wider">Contributed Funds</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportData.map((item) => (
                      <TableRow key={item.id} className="bg-card hover:bg-muted/50">
                        <TableCell className="font-medium text-card-foreground">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={item.iconUrl}
                              alt={`${item.name} icon`}
                              width={32}
                              height={32}
                              className="rounded-full"
                              data-ai-hint={item.iconHint}
                            />
                            <span>{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{item.researchColumn1}</TableCell>
                        <TableCell className="text-muted-foreground">{item.researchColumn2}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{item.contributedFunds}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
