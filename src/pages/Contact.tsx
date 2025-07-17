// Removed: import Navbar from "@/components/Navbar";
// Removed: import Footer from "@/components/Footer";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9876543210", "+91 9876543211"],
    description: "Available 24/7 for support"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@eveez.in", "support@eveez.in"],
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["TravelTech Experiences Pvt. Ltd.", "Bangalore, Karnataka, India"],
    description: "Visit our headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    description: "Sunday closed"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Removed <Navbar /> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to electrify your business? Contact our team for a personalized 
            consultation and discover how EVeez can transform your delivery operations.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-medium mb-1">{detail}</p>
                    ))}
                    <p className="text-muted-foreground text-sm mt-2">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you with a 
                customized solution for your business needs.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="+91 9876543210" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Your Company" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Bikes Needed
                  </label>
                  <Input placeholder="e.g., 10" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your delivery needs, preferred timeline, and any specific requirements..."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose EVeez?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">✅ Flexible Subscriptions</h4>
                    <p className="text-muted-foreground text-sm">
                      Scale your fleet based on business needs with no long-term commitments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✅ 60-80% Cost Savings</h4>
                    <p className="text-muted-foreground text-sm">
                      Significantly reduce fuel and maintenance costs compared to traditional vehicles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✅ Zero Emissions</h4>
                    <p className="text-muted-foreground text-sm">
                      Contribute to a cleaner environment with pollution-free deliveries.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✅ Complete Support</h4>
                    <p className="text-muted-foreground text-sm">
                      24/7 technical support, maintenance, and replacement services included.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✅ Smart Analytics</h4>
                    <p className="text-muted-foreground text-sm">
                      Track performance, savings, and environmental impact through our dashboard.
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-center text-sm text-muted-foreground">
                      Join 500+ businesses already using EVeez
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Deliveries?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how EVeez can help your business go electric and save costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Removed <Footer /> */}
    </div>
  );
};

export default Contact;
