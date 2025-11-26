import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

connectDB();

export async function GET() {
  const blogs = await Blog.find().populate("author", "name email").sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), { status: 200 });
}

export async function POST(req) {
  const { title, content, authorId, slug } = await req.json();
  if (!title || !content || !authorId || !slug) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  const existing = await Blog.findOne({ slug });
  if (existing) {
    return new Response(JSON.stringify({ error: "Slug already exists" }), { status: 409 });
  }
  const blog = await Blog.create({ title, content, author: authorId, slug });
  return new Response(JSON.stringify(blog), { status: 201 });
}
