import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function BlogPage({ params }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug }).populate("author", "name").lean();
  if (!blog) return <p>Blog not found</p>;

  return (
    <article style={{ padding: 24 }}>
      <h1>{blog.title}</h1>
      <p style={{ color: "#666" }}>By {blog.author?.name || "Unknown"} — {new Date(blog.createdAt).toLocaleDateString()}</p>
      <div style={{ marginTop: 16 }}>
        <p style={{ whiteSpace: "pre-wrap" }}>{blog.content}</p>
      </div>
    </article>
  );
}
