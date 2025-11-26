import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import User from "@/models/User";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Redirecting to login...</p>;

  await connectDB();
  const user = await User.findById(session.user.id).lean();
  const blogs = await Blog.find({ author: session.user.id }).lean();

  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Your Blogs</h2>
      <ul>
        {blogs.map(b => <li key={b._id}>{b.title}</li>)}
      </ul>
    </div>
  );
}
