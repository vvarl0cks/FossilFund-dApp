"use client"; // Add this directive

// src/app/community/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

// Placeholder for Twitter/X authentication logic
const signInWithTwitter = () => {
  // Implement Twitter/X authentication logic here
  console.log("Signing in with Twitter/X...");
};

// Placeholder for comment data structure
interface Comment {
  id: string;
  avatarUrl: string;
  name: string;
  twitterHandle: string;
  timestamp: string;
  text: string;
}

// Placeholder comment data
const comments: Comment[] = [
  {
    id: "1",
    avatarUrl: "https://github.com/shadcn.png", // Replace with actual avatar URL
    name: "shadcn",
    twitterHandle: "@shadcn",
    timestamp: "2 hours ago",
    text: "This is a great community section!",
  },
  {
    id: "2",
    avatarUrl: "https://github.com/johndoe.png", // Replace with actual avatar URL
    name: "John Doe",
    twitterHandle: "@johndoe",
    timestamp: "1 hour ago",
    text: "Looking forward to more updates.",
  },
];

export default function CommunityPage() {
  // Placeholder for user state
  const user = null; // Replace with actual user object after authentication

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Community</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Can be used for other community-related content */}
        <div className="lg:col-span-1">
          {/* Add any other community-related components or information here */}
          <Card>
            <CardHeader>
              <CardTitle>About the Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Welcome to the community section! Connect with other users, share your thoughts, and stay updated on the latest news.</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Comment Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              {user ? (
                <>
                  <div className="mb-4">
                    <Textarea placeholder="Write a comment..." />
                  </div>
                  <div className="flex justify-end">
                    <Button>Post Comment</Button>
                  </div>
                </>
              ) : (
                <div className="flex justify-center mb-4">
                  <Button onClick={signInWithTwitter}>Sign in with Twitter/X to comment</Button>
                </div>
              )}

              <div className="mt-8 space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={comment.avatarUrl} />
                      <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-semibold">{comment.name}</div>
                        <div className="text-sm text-muted-foreground">{comment.twitterHandle}</div>
                        <div className="text-sm text-muted-foreground">- {comment.timestamp}</div>
                      </div>
                      <p className="mt-1">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
