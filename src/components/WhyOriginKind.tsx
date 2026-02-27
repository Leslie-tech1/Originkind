import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TreeDeciduous, Users, Sprout } from "lucide-react";

const pillars = [
  {
    icon: TreeDeciduous,
    title: "Kind to Forests",
    description:
      "We source from agroforestry systems that conserve shade trees, increase biodiversity, and improve soil carbon.",
  },
  {
    icon: Users,
    title: "Kind to Farmers",
    description:
      "Direct partnerships with cooperatives ensure premium pricing, training, and long-term contracts.",
  },
  {
    icon: Sprout,
    title: "Kind to Future Generations",
    description:
      "We cultivate crops that restore landscapes — not degrade them.",
  },
];

const WhyOriginKind = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Why OriginKind?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Food should support forests, respect farmers, and taste extraordinary.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <pillar.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/about">Learn More About Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyOriginKind;
