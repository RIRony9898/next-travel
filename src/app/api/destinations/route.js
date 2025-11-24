import { connectDB } from "@/lib/mongodb";
import Destination from "@/models/Destination";

connectDB();

export async function GET() {
  const destinations = await Destination.find();
  return new Response(JSON.stringify(destinations), { status: 200 });
}

export async function POST(req) {
  const { title, country, description, image } = await req.json();
  const destination = await Destination.create({ title, country, description, image });
  return new Response(JSON.stringify(destination), { status: 201 });
}
