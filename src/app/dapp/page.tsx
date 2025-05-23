
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DAppPage() {
  const portfolioData = [
    { asset: 'FOS', amount: '100,000', marketValue: '$100,000', address: '0x123...' },
    { asset: 'SUI', amount: '50', marketValue: '$150,000', address: 'aba0c21ede8tAf7gYb8g' },
    { asset: 'USDC', amount: '250,000', marketValue: '$250,000', address: '0x789...' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Image
            src="/fossil-logo.png"
            alt="FossilFund Logo"
            width={40}
            height={40}
          />
          <h1 className="text-3xl font-bold text-primary ml-2 font-sans">FossilFund</h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
            Community
          </Button>
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
            Fund
          </Button>
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
            Report
          </Button>
          <Button className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">Connect Wallet</Button>
        </div>
      </header>

      <main className="container mx-auto flex-grow py-8 px-4 flex flex-col gap-12 items-center">
        <section className="w-full max-w-4xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/fossil-logo.png"
                alt="FossilFund Mascot"
                width={200}
                height={200}
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

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-2xl">
          <Button className="font-semibold text-xl px-8 py-4 shadow-md w-full sm:w-auto">
            Lock Your $FOS
          </Button>
          <div className="text-lg sm:text-xl font-semibold text-card-foreground bg-card px-4 py-3 sm:py-4 rounded-md shadow-sm text-center w-full sm:w-auto">
            AUM: $500,000,000 <span className="text-green-600 whitespace-nowrap">+50.00%</span>
          </div>
        </div>

        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-accent mb-6 text-center sm:text-left font-sans">Portfolio</h2>
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
