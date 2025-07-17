import { CheckCircle, Phone, Truck, BarChart3, Repeat, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Reach out to our team to discuss your delivery needs and get a customized quote."
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Choose Your Plan",
    description: "Select from our flexible subscription plans that best fit your business requirements."
  },
  {
    number: "03",
    icon: Truck,
    title: "Get Your eBikes",
    description: "We deliver fully charged, ready-to-use eBikes to your location within 24 hours."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Track & Optimize",
    description: "Monitor performance, track savings, and optimize your delivery operations through our platform."
  }
];

const benefits = [
  {
    icon: Repeat,
    title: "Flexible Subscription",
    description: "Scale up or down based on your business needs with no long-term commitments."
  },
  {
    icon: Shield,
    title: "Full Maintenance",
    description: "We handle all maintenance, repairs, and battery management so you can focus on your business."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time insights into delivery performance, cost savings, and environmental impact."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How EVeez Works
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Simple, seamless, and sustainable. Get started with electric delivery 
            bikes in just a few easy steps.
          </p>
        </div>
      </section>

      {/* Steps Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Easy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center relative">
                  <CardHeader>
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everything Included</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Premium eBikes</h4>
                    <p className="text-muted-foreground text-sm">High-quality electric bikes with advanced features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Battery Management</h4>
                    <p className="text-muted-foreground text-sm">Smart battery swapping and charging solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-muted-foreground text-sm">Round-the-clock technical and operational support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Insurance Coverage</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive insurance for peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Performance Analytics</h4>
                    <p className="text-muted-foreground text-sm">Detailed insights and reporting dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join 500+ businesses already making pollution-free deliveries with EVeez. 
                Contact us today for a customized quote.
              </p>
              <Button size="lg" className="w-full">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
