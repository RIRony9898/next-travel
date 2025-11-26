"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider({ items = [] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;

  const item = items[index];
  return (
    <div style={{ position: "relative", height: 320, borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
      <Image src={item.image || "/images/sample.jpg"} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", left: 20, bottom: 20, background: "rgba(0,0,0,0.4)", color: "#fff", padding: 12, borderRadius: 6 }}>
        <h2 style={{ margin: 0 }}>{item.title}</h2>
        <p style={{ margin: 0 }}>{item.country}</p>
      </div>
    </div>
  );
}
