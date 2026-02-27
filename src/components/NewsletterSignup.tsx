import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to OriginKind!",
      description: "You'll receive our latest updates and exclusive offers.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="section-padding bg-forest-dark">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cream/10 text-cream mb-6">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-4">
            Stay Connected
          </h2>
          <p className="text-cream/70 mb-8">
            Join our community for exclusive updates, new product launches, and stories from our farming partners.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus:border-cream/40"
              required
            />
            <Button 
              type="submit" 
              variant="warm" 
              size="lg"
              disabled={isLoading}
              className="group"
            >
              {isLoading ? "Joining..." : "Join"}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <p className="text-xs text-cream/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
