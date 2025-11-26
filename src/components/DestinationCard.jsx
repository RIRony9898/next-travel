import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <Image src={destination.image || "/images/sample.jpg"} alt={destination.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 6 }} />
      <h3>{destination.title}</h3>
      <p>{destination.country}</p>
      <p style={{ fontSize: 13, color: "#555" }}>{destination.description?.slice(0, 120)}...</p>
      <Link href={`/destinations/${destination._id}`}><button style={{ marginTop: 8 }}>View</button></Link>
    </div>
  );
}
