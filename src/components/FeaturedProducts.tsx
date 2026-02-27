import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import coffeeImage from "@/assets/coffee-packaging.png";
import cashewImage from "@/assets/cashew-packaging.png";
import macadamiaImage from "@/assets/macadamia-packaging.png";

const products = [
  {
    id: 1,
    name: "OriginKind Coffee",
    origin: "Lofa, Liberia",
    description: "Smallholder shade-grown specialty coffee",
    tastingNotes: "Cocoa nib, yellow plum, toasted almond",
    image: coffeeImage,
    price: "From £12.50",
  },
  {
    id: 2,
    name: "OriginKind Cashew",
    origin: "Bomi, Sierra Leone",
    description: "Hand-harvested, steam-processed whole kernels",
    tastingNotes: "Buttery, clean sweetness, gentle floral aroma",
    image: cashewImage,
    price: "From £8.50",
  },
  {
    id: 3,
    name: "OriginKind Macadamia",
    origin: "Ghana",
    description: "Emerging forest crop, buttery sweetness",
    tastingNotes: "Rich coconut-vanilla notes",
    image: macadamiaImage,
    price: "From £14.00",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-origin mb-4">Featured Collection</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            From Forest to Table
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Each product traces back to specific farming communities and landscapes in West Africa.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {product.origin}
                  </div>
                  <span className="text-xs font-semibold text-primary">{product.price}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <p className="text-xs text-forest-light italic mb-4">
                  {product.tastingNotes}
                </p>
                
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                  View Details
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
