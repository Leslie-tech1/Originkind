import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">OriginKind</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Forest-positive foods from West Africa. Supporting farmers, preserving forests, delivering extraordinary taste.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>UK HQ: AQUARIUSB LTD</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Forest-Grown Coffee
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cashew Kernels
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Macadamia Nuts
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/origins" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Origins
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Farmer Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:Info@originkindproducts.com" className="hover:text-primary-foreground transition-colors">
                  Info@originkindproducts.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>Wholesale Enquiries</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} OriginKind Foods. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
