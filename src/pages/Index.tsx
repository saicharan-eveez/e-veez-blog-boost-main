import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange/90 to-orange-light/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <div className="mb-6">
            <Zap className="w-16 h-16 mx-auto mb-4 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to EVeez</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Electrifying India's mobility sector with eBikes on subscription. 
            Reducing carbon footprint, one pollution-free delivery at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Subscription
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link to="/blog">
                Read Our Blog
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Leaf className="w-8 h-8 mx-auto mb-3 text-green-accent" />
              <h3 className="text-lg font-semibold mb-2">Pollution-Free</h3>
              <p className="text-white/80">Zero emission deliveries for a cleaner future</p>
            </div>
            <div className="text-center">
              <Building2 className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="text-lg font-semibold mb-2">Business Focused</h3>
              <p className="text-white/80">Subscription model perfect for businesses</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Tech Driven</h3>
              <p className="text-white/80">Advanced EV technology and smart solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 italic">
            "WE WOULD WANT THE WORLD TO BE AN EXCITING PLACE FOR ALL AND FOR LONG."
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            EVeez is a proprietary brand of TravelTech Experiences Pvt. Ltd., one of the pioneers 
            in Electric Vehicle subscription ecosystems in India. We're an initiative driven by 
            passionate individuals committed to technology and sustainable lifestyle.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;
