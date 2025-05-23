
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  avatarFallback: string;
  imageHint?: string; 
}

export default function TestimonialCard({ quote, author, role, avatarSrc, avatarFallback, imageHint }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full shadow-lg bg-background">
      <CardContent className="pt-6 flex-grow">
        <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
        <p className="text-muted-foreground italic leading-relaxed mb-6">"{quote}"</p>
      </CardContent>
      <div className="bg-card p-6 rounded-b-lg">
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={author} data-ai-hint={imageHint} />
            ) : (
              <AvatarImage src={`https://placehold.co/100x100.png`} alt={author} data-ai-hint={imageHint} />
            )}
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
