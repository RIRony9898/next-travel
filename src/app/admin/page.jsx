import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Blog from "@/models/Blog";
import Destination from "@/models/Destination";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Redirecting to login...</p>;
  if (session.user.role !== "admin") return <p>Access denied</p>;

  await connectDB();
  const users = await User.find().lean();
  const blogs = await Blog.find().lean();
  const destinations = await Destination.find().lean();

  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Dashboard</h1>
      <p>Users: {users.length}</p>
      <p>Blogs: {blogs.length}</p>
      <p>Destinations: {destinations.length}</p>
      {/* Add management actions (delete, edit) as needed */}
    </div>
  );
}
