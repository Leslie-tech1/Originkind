import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FarmGallery from "@/components/FarmGallery";
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Users, Sprout, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const origins = [
  {
    country: "Liberia",
    regions: ["Lofa", "Bong", "Nimba"],
    products: "Forest-Grown Coffee",
    description: "High-altitude shade coffee from indigenous Typica-like heirloom varieties.",
  },
  {
    country: "Sierra Leone",
    regions: ["Kailahun", "Bomi", "Port Loko"],
    products: "Whole Cashew Kernels",
    description: "Hand-harvested forest cashews with rich fats and exceptional aroma.",
  },
  {
    country: "Ghana",
    regions: ["Bono East", "Ahafo"],
    products: "Macadamia",
    description: "Emerging agroforestry macadamia clusters supporting forest conservation.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="badge-origin mb-6">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              OriginKind Foods brings forest-positive West African foods to the world — 
              beginning with coffee, cashew and macadamia grown by smallholder farming 
              communities in ecologically important landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                What We Believe
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Food should:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TreeDeciduous className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">Support forests</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-lg text-foreground">Respect farmers</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-lg text-foreground">Taste extraordinary</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work directly with farmer groups to improve:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Agroforestry design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Nursery seedlings
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Soil and water conservation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Training on fermentation and drying
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Origins */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="badge-origin mb-4">Our Origins</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-4">
              Where It All Begins
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the regions and communities that produce our extraordinary forest foods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {origins.map((origin) => (
              <article key={origin.country} className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300">
                <div className="h-48 bg-gradient-forest flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                    <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                      {origin.country}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {origin.regions.map((region) => (
                      <span key={region} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        {region}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {origin.products}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {origin.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Gallery */}
      <FarmGallery />

      {/* Our Presence */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Presence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                UK HQ Distribution
              </h3>
              <p className="text-muted-foreground">AQUARIUSB LTD</p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-center">
              <MapPin className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Sourcing Origins
              </h3>
              <p className="text-primary-foreground/80">Liberia, Sierra Leone, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to taste the difference?
          </h2>
          <Link to="/products">
            <Button variant="hero" size="xl">
              Shop Our Collection
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
