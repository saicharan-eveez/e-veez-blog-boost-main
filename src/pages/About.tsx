import { Zap, Users, Leaf, Target, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EVeez</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Pioneering India's electric mobility revolution with sustainable, 
            technology-driven solutions for businesses.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 italic">
                "WE WOULD WANT THE WORLD TO BE AN EXCITING PLACE FOR ALL AND FOR LONG."
              </p>
              <p className="text-foreground/80 leading-relaxed">
                EVeez aims to electrify the Indian mobility sector by providing eBikes on 
                subscription to businesses looking to reduce their carbon footprint. 
                Your next pizza delivery could be pollution-free - count on us!
              </p>
            </div>
            <div className="bg-gradient-card p-8 rounded-lg">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a sustainable ecosystem where every business delivery 
                contributes to a cleaner, greener India through electric mobility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              EVeez is a proprietary brand of TravelTech Experiences Pvt. Ltd., 
              one of the pioneers in Electric Vehicle subscription ecosystems in India.
            </p>
            <p>
              Founded by a team of passionate individuals driven by technology and 
              sustainable lifestyle, we recognized the urgent need for clean mobility 
              solutions in India's rapidly growing delivery ecosystem.
            </p>
            <p>
              What started as a vision to reduce urban pollution has evolved into 
              a comprehensive platform that empowers businesses to make environmentally 
              conscious choices without compromising on efficiency or cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision we make prioritizes environmental impact and 
                  contributes to a cleaner future.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technology to create smart, 
                  efficient mobility solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build lasting relationships with businesses, supporting 
                  their growth while advancing sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Partner Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">KM Pollution-Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Active eBikes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50T</div>
              <div className="text-white/80">CO2 Reduced</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
