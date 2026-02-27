import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyOriginKind from "@/components/WhyOriginKind";
import ImpactSection from "@/components/ImpactSection";
import TrustSection from "@/components/TrustSection";
import AboutTeaser from "@/components/AboutTeaser";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyOriginKind />
      <ImpactSection />
      <TrustSection />
      <AboutTeaser />
      <NewsletterSignup />
      <Footer />
    </main>
  );
};

export default Index;
