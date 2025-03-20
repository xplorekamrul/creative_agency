import BlogCard from "../../../components/blogCard";
import { Header } from "../../../components/header";

interface BlogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
}

export default function BlogGridDemo() {
  // Sample blog posts data
  const posts: BlogPost[] = [
    {
      id: "1",
      image: "/blog (1).png",
      title: "Business Plans That Fit Your Best Blog",
      excerpt:
        "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
      author: "Admin",
      date: "07/11/2021",
      slug: "#",
    },
    {
      id: "2",
      image: "/blog (2).png",
      title: "How to Grow Your Online Audience",
      excerpt: "Learn effective strategies to expand your reach and engage with more readers on your blog.",
      author: "Jane Smith",
      date: "08/15/2021",
      slug: "#",
    },
    {
      id: "3",
      image: "/blog (3).png",
      title: "Content Creation Best Practices",
      excerpt: "Discover the top techniques professional bloggers use to create compelling and shareable content.",
      author: "John Doe",
      date: "09/22/2021",
      slug: "#",
    },
  ];

  return (
    <div className="max-w-Mycontainer mx-auto px-4 py-12">
      <Header title="Our Latest News" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." className="text-center"/>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
