import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

connectDB();

export async function GET(req) {
  const { id } = req.params;
  const blog = await Blog.findById(id).populate("author", "name email");
  if (!blog) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  return new Response(JSON.stringify(blog), { status: 200 });
}

export async function PUT(req) {
  const { id } = req.params;
  const data = await req.json();
  const updated = await Blog.findByIdAndUpdate(id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req) {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
}
