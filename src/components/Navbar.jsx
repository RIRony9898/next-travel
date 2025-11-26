"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, alignItems: "center", borderBottom: "1px solid #eee" }}>
      <Link href="/"><strong>TravelBlog</strong></Link>
      <Link href="/destinations">Destinations</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/map">Map</Link>
      <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
        {session?.user ? (
          <>
            <Link href="/profile">{session.user.name || session.user.email}</Link>
            <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
            {session.user.role === "admin" && <Link href="/admin">Admin</Link>}
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
