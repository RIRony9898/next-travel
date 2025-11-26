import BlogCard from "@/components/BlogCard";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function BlogsPage() {
  await connectDB();
  const blogs = await Blog.find().populate("author", "name").sort({ createdAt: -1 }).lean();
  return (
    <main style={{ padding: 24 }}>
      <h1>All Blogs</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 16 }}>
        {blogs.map(b => <BlogCard key={b._id} blog={b} />)}
      </div>
    </main>
  );
}
