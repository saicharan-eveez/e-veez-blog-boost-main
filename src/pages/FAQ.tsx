import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        id: "1",
        question: "How do I get started with EVeez?",
        answer:
          "Getting started is simple! Contact our team through phone, email, or our website. We'll discuss your delivery needs, provide a customized quote, and can have eBikes delivered to your location within 24 hours of subscription confirmation.",
      },
      {
        id: "2",
        question: "What documents do I need to subscribe?",
        answer:
          "You'll need business registration documents, GST certificate, authorized person's ID proof, and address verification. Our team will guide you through the entire documentation process.",
      },
      {
        id: "3",
        question: "Is there a minimum subscription period?",
        answer:
          "Our flexible plans start from monthly subscriptions with no long-term commitments. You can scale up or down based on your business needs.",
      },
    ],
  },
  {
    category: "Subscription & Pricing",
    questions: [
      {
        id: "4",
        question: "What's included in the subscription?",
        answer:
          "Your subscription includes the eBike, battery management, maintenance, repairs, insurance, 24/7 support, and access to our performance analytics dashboard. Everything you need for hassle-free electric deliveries.",
      },
      {
        id: "5",
        question: "How is pricing calculated?",
        answer:
          "Pricing is based on the number of bikes, subscription duration, and usage patterns. We offer competitive rates that help you save compared to traditional fuel-based vehicles. Contact us for a personalized quote.",
      },
      {
        id: "6",
        question: "Are there any hidden charges?",
        answer:
          "No hidden charges! Our transparent pricing includes everything mentioned in your plan. Additional charges may apply only for damage beyond normal wear and tear or usage outside agreed terms.",
      },
    ],
  },
  {
    category: "Technical & Maintenance",
    questions: [
      {
        id: "7",
        question: "What happens if the bike breaks down?",
        answer:
          "We provide 24/7 technical support and quick replacement services. In case of breakdown, contact our support team and we'll either provide on-site repair or a replacement bike to ensure minimal downtime.",
      },
      {
        id: "8",
        question: "How is battery charging handled?",
        answer:
          "We offer flexible battery solutions including swappable batteries and charging infrastructure. Our smart battery management system ensures optimal performance and longevity.",
      },
      {
        id: "9",
        question: "What's the range and charging time?",
        answer:
          "Our eBikes typically offer 60-80 km range per charge depending on load and terrain. Fast charging takes 3-4 hours, while our swappable battery option provides instant power replacement.",
      },
    ],
  },
  {
    category: "Business Benefits",
    questions: [
      {
        id: "10",
        question: "How much can I save compared to petrol vehicles?",
        answer:
          "Businesses typically save 60-80% on fuel costs and 40-50% on overall operational costs including maintenance. Our analytics dashboard provides detailed cost comparison reports.",
      },
      {
        id: "11",
        question: "What environmental impact can I expect?",
        answer:
          "Each eBike eliminates approximately 2-3 tons of CO2 emissions annually compared to petrol bikes. You'll also contribute to reduced air and noise pollution in urban areas.",
      },
      {
        id: "12",
        question: "Can I track my fleet performance?",
        answer:
          "Yes! Our comprehensive dashboard provides real-time tracking, performance analytics, cost savings reports, environmental impact metrics, and delivery efficiency insights.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about EVeez subscription, pricing,
            and how our electric mobility solutions work.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find the answer you're looking for? Our team is here to help
            you with any specific questions about EVeez subscription services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Electric?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join 500+ businesses already making pollution-free deliveries with
            EVeez
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your Subscription Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
