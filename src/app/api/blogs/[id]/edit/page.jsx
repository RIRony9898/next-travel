"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }) {
  const { id } = params;
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/blogs/${id}`).then(r => r.json()).then(setBlog);
  }, [id]);

  if (!blog) return <p>Loading…</p>;

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });
    setSaving(false);
    if (res.ok) router.push(`/blogs/${blog.slug}`);
    else alert("Error updating");
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1>Edit Blog</h1>
      <input value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
      <textarea value={blog.content} onChange={(e) => setBlog({ ...blog, content: e.target.value })} rows={10} />
      <button disabled={saving}>{saving ? "Saving…" : "Update"}</button>
    </form>
  );
}
