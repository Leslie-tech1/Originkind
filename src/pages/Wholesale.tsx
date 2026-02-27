import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WholesaleContactForm from "@/components/WholesaleContactForm";
import { Mail, Phone, Building } from "lucide-react";

const Wholesale = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="badge-origin mb-6">Wholesale</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bring forest-positive West African foods to your customers. 
              We offer competitive wholesale pricing and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Why Partner With OriginKind?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Traceable Origins</h3>
                    <p className="text-muted-foreground">Full transparency from farm to shelf</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Bulk Formats</h3>
                    <p className="text-muted-foreground">1kg, 5kg, 10kg packs for foodservice and retail</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">Marketing Support</h3>
                    <p className="text-muted-foreground">Origin stories and materials to share with customers</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">UK Distribution</h3>
                    <p className="text-muted-foreground">Fast shipping from our UK HQ</p>
                  </div>
                </li>
              </ul>

              {/* Contact Info */}
              <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:Info@originkindproducts.com" className="hover:text-foreground transition-colors">
                      Info@originkindproducts.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Request a callback</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>AQUARIUSB LTD, United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Request Wholesale Pricing
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you within 24-48 hours.
              </p>
              <WholesaleContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Wholesale;
