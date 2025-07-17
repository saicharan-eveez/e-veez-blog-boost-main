import { useParams } from "react-router-dom";
import envImage from "@/assets/envv1.jpg";

const blogPosts = [
  {
    title: "Last Mile Delivery Jobs: A Growing Career Path in the Delivery Industry",
    slug: "last-mile-delivery-career-growth",
    content: `Last mile delivery jobs are becoming a cornerstone of the logistics industry. With the rise of e-commerce,
    the demand for quick and efficient delivery has skyrocketed. These jobs are creating long-term career paths
    for gig workers, offering flexibility, steady income, and now—with electric vehicles—a more sustainable future.`,
    author: "Team EVeez",
    date: "2025-05-01",
    image: envImage,
  },
  {
    title: "Get an Electric Scooter on Rent for Delivery Job",
    slug: "electric-scooter-rental-delivery",
    content: `Renting an electric scooter is one of the most efficient ways to get started with last mile delivery jobs.
    Learn how EVeez provides affordable, eco-friendly 2-wheelers for delivery partners with zero maintenance cost,
    smart tracking, and timely service support.`,
    author: "Team EVeez",
    date: "2025-04-23",
    image: envImage,
  },
  {
    title: "How EV Batteries Are Made: A Quick Look Inside Electric Vehicle Power",
    slug: "how-ev-batteries-are-made",
    content: `Electric vehicle (EV) batteries are built using lithium-ion cells, carefully assembled into modules and packs.
    The manufacturing process includes material processing, electrode production, cell assembly, formation, and
    rigorous testing to ensure safety and performance.`,
    author: "EV Insights",
    date: "2025-04-10",
    image: envImage,
  },
  {
    title: "Delivery Jobs: Exploring Opportunities with EVeez Electric",
    slug: "delivery-jobs-with-eveez",
    content: `EVeez is empowering delivery professionals by providing electric bikes on rent at low cost,
    ensuring hassle-free maintenance, and access to a large support network. Join the gig economy revolution with
    smart, green solutions.`,
    author: "Team EVeez",
    date: "2025-03-28",
    image: envImage,
  },
  {
    title: "Top 5 Companies That Provide Delivery Jobs",
    slug: "top-5-delivery-job-companies",
    content: `Looking to start your career in last mile delivery? These top 5 companies are actively hiring:
    1. EVeez
    2. Swiggy
    3. Zomato
    4. Amazon Flex
    5. Dunzo
    Each offers flexible work hours, attractive pay, and options for electric vehicle use.`,
    author: "Career Team",
    date: "2025-03-15",
    image: envImage,
  },
  {
    title: "Indofast Energy partners EVeez to deploy 20,000 electric bikes across key tier I/II cities",
    slug: "indofast-eveez-electric-deal",
    content: `EVeez and Indofast Energy join forces to roll out 20,000 electric scooters in cities like Hyderabad, Jaipur,
    and Nagpur. This partnership marks a new phase of green mobility expansion aimed at transforming urban logistics.`,
    author: "EV News",
    date: "2025-02-21",
    image: envImage,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div className="p-8 text-center">Article not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-lg mb-6 w-full h-64 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {post.author} • {new Date(post.date).toDateString()}
      </p>
      <div className="text-lg text-gray-800 whitespace-pre-line">{post.content}</div>
    </div>
  );
};

export default BlogDetail;