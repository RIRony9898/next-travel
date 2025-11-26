"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/utils";

export default function CreateBlog() {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  if (!session) return <p>Redirecting to login...</p>;

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    const slug = slugify(title);
    const res = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, content, authorId: session.user.id, slug }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setSaving(false);
    if (res.ok) router.push(`/blogs/${data.slug}`);
    else alert(data.error || "Error");
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1>Create Blog</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post..." rows={10} required />
      <button disabled={saving}>{saving ? "Saving…" : "Create"}</button>
    </form>
  );
}
