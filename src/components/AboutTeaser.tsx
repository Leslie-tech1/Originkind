import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutTeaser = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="badge-origin mb-6">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              OriginKind Foods brings forest-positive West African foods to the world — 
              beginning with coffee, cashew and macadamia grown by smallholder farming 
              communities in ecologically important landscapes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work directly with farmer groups to improve agroforestry design, 
              nursery seedlings, soil and water conservation, and training on 
              fermentation and drying.
            </p>
            <Button variant="heroOutline" size="lg" className="group" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Origins Badges */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-display font-semibold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Countries</p>
                <p className="text-xs text-forest-light mt-1">Liberia, Sierra Leone, Ghana</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-3xl font-display font-semibold text-secondary mb-2">850m+</div>
                <p className="text-sm text-muted-foreground">Elevation</p>
                <p className="text-xs text-forest-light mt-1">High altitude farming</p>
              </div>
              <div className="bg-primary rounded-2xl p-6 col-span-2">
                <div className="text-2xl font-display font-semibold text-primary-foreground mb-2">
                  Direct Trade
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Working directly with cooperatives for fair pricing and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
