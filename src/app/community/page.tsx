
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import ConnectWallet from '@/components/ConnectWallet'; // Import ConnectWallet component
import { useState, useEffect } from 'react'; // Required for potential client-side logic

interface Comment {
  id: string;
  avatarUrl: string;
  avatarHint: string;
  name: string;
  twitterHandle: string;
  timestamp: string;
  text: string;
}

const commentsData: Comment[] = [
  { id: "1", avatarUrl: "https://placehold.co/40x40.png", avatarHint: "user avatar", name: "CryptoDino", twitterHandle: "@cryptodino", timestamp: "2 hours ago", text: "Love the FossilFund vision! Bringing back the Dire Wolf is epic!", },
  { id: "2", avatarUrl: "https://placehold.co/40x40.png", avatarHint: "person avatar", name: "PaleoQueen", twitterHandle: "@paleoqueen", timestamp: "1 hour ago", text: "Staked my $FOS, ready for the de-extinction revolution!", },
  { id: "3", avatarUrl: "https://placehold.co/40x40.png", avatarHint: "generic avatar", name: "SUIExplorer", twitterHandle: "@suiexplorer", timestamp: "30 mins ago", text: "Great to see a DeSci project on SUI. The AI management is a nice touch.", },
];

export default function CommunityPage() {
  // Placeholder for user authentication state - replace with actual auth logic
  const [user, setUser] = useState<null | { name: string }>(null); 
  
  const signInWithTwitter = () => {
    console.log("Attempting to sign in with Twitter/X...");
    // Placeholder: In a real app, this would trigger an OAuth flow
    // For now, let's simulate a login
    setUser({ name: "DemoUser" }); 
  };

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
          <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md border-primary text-primary">
            Community
          </Button>
          <Link href="/dapp" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Fund
            </Button>
          </Link>
          <Link href="/report" passHref>
            <Button variant="outline" className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md">
              Report
            </Button>
          </Link>
          <div className="font-semibold px-0 py-0 sm:px-0 sm:py-0 shadow-md rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-primary-foreground">
            <ConnectWallet />
          </div>
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

        <h1 className="text-4xl font-bold mb-12 text-center text-primary font-sans">Community</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="lg:col-span-1">
            <Card className="shadow-lg rounded-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">About the Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Welcome to the FossilFund community! Connect with other enthusiasts, share your thoughts on de-extinction, and stay updated on the latest project news.</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-lg bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Join the Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                {user ? (
                  <>
                    <div className="mb-4">
                      <Textarea placeholder="Write a comment..." className="min-h-[100px] rounded-md border-input focus:ring-primary bg-background text-foreground" />
                    </div>
                    <div className="flex justify-end">
                      <Button className="shadow-md bg-primary text-primary-foreground hover:bg-primary/90">Post Comment</Button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center mb-4 p-6 border border-dashed rounded-md border-border">
                    <p className="mb-4 text-muted-foreground">Want to share your thoughts?</p>
                    <Button
                      onClick={signInWithTwitter}
                      className="font-semibold shadow-md text-primary-foreground"
                      style={{ backgroundColor: '#51A2EB' }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3C8AD6')}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#51A2EB')}
                    >
                      Sign in with X to comment
                    </Button>
                  </div>
                )}

                <div className="mt-8 space-y-6">
                  {commentsData.map((comment) => (
                    <div key={comment.id} className="flex space-x-4 p-4 border border-border rounded-md shadow-sm bg-card">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={comment.avatarUrl} alt={`${comment.name}'s avatar`} data-ai-hint={comment.avatarHint} />
                        <AvatarFallback className="bg-muted text-muted-foreground">{comment.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="font-semibold text-card-foreground">{comment.name}</div>
                          <div className="text-xs text-muted-foreground">{comment.twitterHandle}</div>
                          <div className="text-xs text-muted-foreground">- {comment.timestamp}</div>
                        </div>
                        <p className="text-sm text-card-foreground">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
