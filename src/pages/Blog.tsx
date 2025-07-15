import { useEffect, useState } from "react";
import {
  Leaf,
  Zap,
  Building2
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import heroBlog from "@/assets/hero-blog.jpg";
import envImage from "@/assets/envv1.jpg"; // local image

const blogPosts = [
  {
    title: "Last Mile Delivery Jobs: A Growing Career Path in the Delivery Industry",
    author: "Team EVeez",
    date: "2025-05-01",
    readTime: "10 min read",
    category: "Last Mile Delivery",
    excerpt: "Explore how last mile delivery jobs are transforming the logistics space and offering sustainable career options.",
    image: envImage,
    featured: true
  },
  {
    title: "Get an Electric Scooter on Rent for Delivery Job",
    author: "Team EVeez",
    date: "2025-04-23",
    readTime: "9 min read",
    category: "Delivery",
    excerpt: "Everything you need to know about renting an electric scooter for last mile delivery work.",
    image: envImage,
    featured: true
  },
  {
    title: "How EV Batteries Are Made: A Quick Look Inside Electric Vehicle Power",
    author: "Team EVeez Electric",
    date: "2025-04-21",
    readTime: "14 min read",
    category: "Electric Vehicle",
    excerpt: "An inside look into the manufacturing process and materials used in EV batteries.",
    image: envImage,
    featured: false
  },
  {
    title: "Delivery Jobs: Exploring Opportunities with EVeez Electric",
    author: "Team EVeez Electric",
    date: "2025-04-14",
    readTime: "8 min read",
    category: "Uncategorized",
    excerpt: "Find out how EVeez is helping gig workers thrive in the modern delivery ecosystem.",
    image: envImage,
    featured: false
  },
  {
    title: "Top 5 Companies That Provide Delivery Jobs",
    author: "Team EVeez Electric",
    date: "2025-04-10",
    readTime: "7 min read",
    category: "Delivery Jobs",
    excerpt: "A ranked list of leading companies hiring for last mile delivery roles in 2025.",
    image: envImage,
    featured: false
  },
  {
    title: "Indofast Energy partners EVeez to deploy 20,000 electric bikes across key tier I/II cities",
    author: "The Economic Times",
    date: "2025-04-01",
    readTime: "6 min read",
    category: "Partnership",
    excerpt: "Major collaboration announced between Indofast Energy and EVeez to expand clean mobility infrastructure.",
    image: envImage,
    featured: false
  },
  {
    title: "EVeez Plans to Expand to a Fleet of 50,000 2-EVs in the Coming Years, Supporting Gig Workers",
    author: "Hindustan Times",
    date: "2025-03-28",
    readTime: "6 min read",
    category: "EV Expansion",
    excerpt: "EVeez sets an ambitious roadmap to scale their electric fleet and empower delivery professionals.",
    image: envImage,
    featured: false
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [km, setKm] = useState(0);
  const [partners, setPartners] = useState(0);

  useEffect(() => {
    const kmInterval = setInterval(() => {
      setKm(prev => {
        if (prev < 50000) return prev + 500;
        clearInterval(kmInterval);
        return 50000;
      });
    }, 40);

    const partnerInterval = setInterval(() => {
      setPartners(prev => {
        if (prev < 500) return prev + 10;
        clearInterval(partnerInterval);
        return 500;
      });
    }, 80);

    return () => {
      clearInterval(kmInterval);
      clearInterval(partnerInterval);
    };
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroBlog} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Electrify Your Knowledge</h1>
          <p className="text-xl mb-6">Insights and stories from India’s leading electric mobility platform</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-xl text-white text-sm">
              {km.toLocaleString()}+ KM <span className="text-yellow-400 animate-pulse">🛵</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
              <Leaf className="w-5 h-5 text-white" />
              <span>Carbon Neutral</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
              <Building2 className="w-5 h-5 text-white" />
              <span>{partners}+ Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">🔥 Trending Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-40 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground flex justify-between mb-2">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline font-medium">Read More →</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-40 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground flex justify-between mb-2">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline font-medium">Read More →</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About EVeez</h4>
            <p className="text-sm text-gray-300">
              EVeez is building the future of electric mobility for delivery partners and businesses
              across India, helping reduce pollution and operational costs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/partner" className="hover:underline">Partner with us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300">support@eveez.in</p>
            <p className="text-sm text-gray-300">+91-98765-43210</p>
            <p className="text-sm text-gray-300 mt-2">© {new Date().getFullYear()} EVeez Electric Mobility</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
