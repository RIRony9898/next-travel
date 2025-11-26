import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3>{blog.title}</h3>
      <p style={{ fontSize: 13, color: "#666" }}>By {blog?.author?.name || "Unknown"}</p>
      <p style={{ fontSize: 14 }}>{blog.content?.slice(0, 140)}...</p>
      <Link href={`/blogs/${blog.slug}`}><button style={{ marginTop: 8 }}>Read</button></Link>
    </div>
  );
}
