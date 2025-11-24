import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Destination from "@/models/Destination";
import { connectDB } from "@/lib/mongodb";
import Image from "next/image";

export default async function DestinationPage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Redirecting to login...</p>;

  await connectDB();
  const destination = await Destination.findById(params.id).lean();

  if (!destination) return <p>Destination not found</p>;

  return (
    <div>
      <h1>{destination.title}</h1>
      <p>{destination.country}</p>
      <p>{destination.description}</p>
      {destination.image && <Image src={destination.image} alt={destination.title} fill />}
    </div>
  );
}
