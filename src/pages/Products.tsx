import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Info } from "lucide-react";
import coffeePackaging from "@/assets/coffee-packaging.png";
import cashewPackaging from "@/assets/cashew-packaging.png";
import macadamiaPackaging from "@/assets/macadamia-packaging.png";

const products = [
  {
    id: "coffee",
    name: "OriginKind Coffee",
    subtitle: "Forest-Grown Specialty (Liberia)",
    image: coffeePackaging,
    tastingNotes: "Cocoa nib, yellow plum, toasted almond",
    variety: "Indigenous Typica-like heirlooms",
    process: "Washed",
    elevation: "850–1,200m",
    drying: "Raised beds",
    roast: "Medium, balanced acidity",
    originStory: "Deep in the highlands of Lofa County, Liberia, our coffee grows under the canopy of ancient shade trees. These heirloom varieties have been cultivated by local families for generations, producing beans with a complexity and elegance rarely found elsewhere. Each harvest represents the careful work of over 200 smallholder farmers who understand that great coffee comes from healthy forests.",
    whyItMatters: "By choosing OriginKind coffee, you're supporting the preservation of Liberia's last remaining forest landscapes. Our partner farmers receive 40% above market price, enabling them to invest in their communities and resist pressure to clear land for other crops.",
    howToEnjoy: [
      "Pour Over: 15g coffee, 250ml water at 94°C, 3-4 minute brew",
      "French Press: Coarse grind, 4-minute steep for full body",
      "Espresso: 18g in, 36g out, 28-32 seconds",
    ],
    packSizes: ["250g (Whole Bean / Ground)", "1kg (Wholesale Pack)"],
    price: "From £12.50",
  },
  {
    id: "cashew",
    name: "OriginKind Cashew",
    subtitle: "Whole Kernels (Sierra Leone)",
    image: cashewPackaging,
    tastingNotes: "Buttery, clean sweetness, gentle floral aroma",
    processing: "Steam pasteurised — no harsh shelling chemicals",
    grades: "W240, W320",
    texture: "Crunchy, low moisture",
    originStory: "In the forests of Sierra Leone, cashew trees grow alongside native species, creating a diverse ecosystem that supports both wildlife and livelihoods. Our cashews are hand-harvested by women's cooperatives who have developed expertise in selecting only the finest kernels. The steam processing method we use preserves both flavour and worker safety.",
    whyItMatters: "Forest cashew cultivation provides an alternative to slash-and-burn agriculture. Our partner cooperatives have planted over 5,000 shade trees alongside their cashew groves, creating corridors for wildlife and carbon sinks for the future.",
    howToEnjoy: [
      "Snacking: Perfect straight from the pack",
      "Cooking: Adds richness to curries and stir-fries",
      "Baking: Blend into cashew butter or use in desserts",
    ],
    packSizes: ["250g Retail Pouch", "1kg Bulk Pouch", "10kg Foodservice Pack"],
    price: "From £8.50",
  },
  {
    id: "macadamia",
    name: "OriginKind Macadamia",
    subtitle: "Emerging Forest Crop (Ghana)",
    image: macadamiaPackaging,
    tastingNotes: "Rich coconut-vanilla notes",
    roast: "Light baked",
    farmSystem: "Tree-crop diversification under shade",
    originStory: "Ghana's Bono East region is pioneering a new approach to macadamia cultivation. Working with forward-thinking farmers, we're establishing macadamia as an understory crop within existing cocoa and shade systems. This emerging origin represents the future of regenerative agriculture — creating value while restoring degraded landscapes.",
    whyItMatters: "Early adoption of agroforestry macadamia reduces pressure on fragile forests. Each kilogram purchased supports the planting of additional shade trees and provides income diversification for cocoa farmers facing climate uncertainty.",
    howToEnjoy: [
      "Premium Snacking: Savour the natural sweetness",
      "Desserts: Top ice cream or bake into cookies",
      "Gift Giving: Beautiful in our premium pouches",
    ],
    packSizes: ["200g Retail", "800g Club Format"],
    price: "From £14.00",
  },
];

const Products = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="badge-origin mb-6">Our Products</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6">
              From Forest to Table
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each product traces back to specific farming communities and landscapes in West Africa. 
              Fully traceable, ethically sourced, and extraordinarily delicious.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-32">
            {products.map((product, index) => (
              <article 
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} lg:sticky lg:top-24`}>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated bg-cream">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Price Badge */}
                  <div className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                    {product.subtitle}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-4">
                    {product.name}
                  </h2>
                  
                  <p className="text-lg italic text-forest-light mb-6">
                    {product.tastingNotes}
                  </p>

                  {/* Origin Story */}
                  <div className="bg-cream rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Origin Story</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.originStory}
                    </p>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Why This Product Matters</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.whyItMatters}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.variety && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Variety</span>
                        <p className="text-sm text-foreground mt-1">{product.variety}</p>
                      </div>
                    )}
                    {product.process && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Process</span>
                        <p className="text-sm text-foreground mt-1">{product.process}</p>
                      </div>
                    )}
                    {product.elevation && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Elevation</span>
                        <p className="text-sm text-foreground mt-1">{product.elevation}</p>
                      </div>
                    )}
                    {product.roast && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Roast</span>
                        <p className="text-sm text-foreground mt-1">{product.roast}</p>
                      </div>
                    )}
                    {product.processing && (
                      <div className="col-span-2">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Processing</span>
                        <p className="text-sm text-foreground mt-1">{product.processing}</p>
                      </div>
                    )}
                    {product.grades && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Grades</span>
                        <p className="text-sm text-foreground mt-1">{product.grades}</p>
                      </div>
                    )}
                    {product.texture && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Texture</span>
                        <p className="text-sm text-foreground mt-1">{product.texture}</p>
                      </div>
                    )}
                    {product.farmSystem && (
                      <div className="col-span-2">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Farm System</span>
                        <p className="text-sm text-foreground mt-1">{product.farmSystem}</p>
                      </div>
                    )}
                  </div>

                  {/* How to Enjoy */}
                  <div className="bg-card rounded-2xl p-6 mb-6 shadow-soft">
                    <div className="flex items-center gap-2 mb-3">
                      {product.id === "coffee" ? (
                        <Coffee className="h-5 w-5 text-secondary" />
                      ) : (
                        <Utensils className="h-5 w-5 text-secondary" />
                      )}
                      <h3 className="font-semibold text-foreground">How to Enjoy</h3>
                    </div>
                    <ul className="space-y-2">
                      {product.howToEnjoy.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pack Sizes */}
                  <div className="mb-8">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Available Sizes</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.packSizes.map((size) => (
                        <span key={size} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">Buy Now</Link>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild>
                      <Link to="/wholesale">Wholesale Enquiry</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Whether you're a café, retailer, or conscious consumer, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" asChild>
              <Link to="/wholesale">Wholesale Enquiries</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-cream/30 text-primary-foreground hover:bg-cream hover:text-primary bg-transparent"
              asChild
            >
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
