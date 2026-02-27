import { TreeDeciduous, Users, Globe, Recycle } from "lucide-react";

const metrics = [
  {
    icon: TreeDeciduous,
    value: "10,000+",
    label: "Trees Protected",
    description: "Shade trees conserved through agroforestry partnerships",
  },
  {
    icon: Users,
    value: "500+",
    label: "Farmers Supported",
    description: "Smallholder farmers receiving premium pricing",
  },
  {
    icon: Globe,
    value: "3",
    label: "Regions Impacted",
    description: "Liberia, Sierra Leone & Ghana",
  },
  {
    icon: Recycle,
    value: "100%",
    label: "Sustainable Packaging",
    description: "Recyclable and compostable materials",
  },
];

const ImpactSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cream/10 text-primary-foreground text-xs font-medium tracking-wide mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
            Measurable Change
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            We believe in transparency. Here's the impact we're making together.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center bg-cream/5 rounded-2xl p-8 backdrop-blur-sm border border-cream/10 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cream/10 text-primary-foreground mb-4">
                <metric.icon className="h-7 w-7" />
              </div>
              <div className="font-display text-4xl font-semibold text-primary-foreground mb-2">
                {metric.value}
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
