import { Button } from "@/components/ui/button";
import { Leaf, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  const badges = [
    { icon: MapPin, label: "Origin Traceable" },
    { icon: Leaf, label: "Forest-Positive Farming" },
    { icon: ShieldCheck, label: "Farmer Premium Pricing" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="West African forest canopy at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/40" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-20 pb-16 md:py-0">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-xs font-medium tracking-wide"
              >
                <badge.icon className="h-3.5 w-3.5" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Forest-Positive Foods from West Africa
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-cream/80 max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Ethically sourced coffee, cashews & macadamia that restore forests and empower farming communities.
          </p>

          {/* Audience Pathway Split - 3 clear CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="warm" size="xl" asChild>
              <Link to="/products">Shop Ethical Foods</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-cream/30 text-cream hover:bg-cream hover:text-forest-dark bg-transparent"
              asChild
            >
              <Link to="/wholesale">Wholesale & Partnerships</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-cream/30 text-cream hover:bg-cream hover:text-forest-dark bg-transparent"
              asChild
            >
              <Link to="/about">Our Impact</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
