import { Quote, Award, Handshake } from "lucide-react";

const certifications = [
  "Rainforest Alliance (In Progress)",
  "Organic Certification (Applied)",
  "Direct Trade Verified",
];

const testimonials = [
  {
    quote: "OriginKind's coffee has become our house blend. Customers love the story behind every cup.",
    author: "James Mitchell",
    role: "Owner, Forest & Bean Café, London",
  },
  {
    quote: "Finally, a supplier that delivers on both ethics and quality. The cashews are exceptional.",
    author: "Sarah Chen",
    role: "Buyer, Whole Foods Market UK",
  },
];

const partners = [
  "UK Specialty Coffee Association",
  "Ethical Consumer",
  "West Africa Trade Hub",
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="badge-origin mb-4">Trust & Credibility</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Why People Trust Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Certifications */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Certifications & Standards
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/20 text-secondary mb-6">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Our Partners
            </h3>
            <ul className="space-y-3">
              {partners.map((partner) => (
                <li key={partner} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {partner}
                </li>
              ))}
            </ul>
          </div>

          {/* Founder Story Preview */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="font-display text-xl font-semibold mb-4">
              Meet the Founder
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              OriginKind was founded with a simple belief: that food production should benefit forests and farming communities, not exploit them.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              After years working in sustainable agriculture across West Africa, we saw an opportunity to connect conscious consumers with exceptional products from regenerative systems.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <p className="text-lg text-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
