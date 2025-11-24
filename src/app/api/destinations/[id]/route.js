import { connectDB } from "@/lib/mongodb";
import Destination from "@/models/Destination";

connectDB();

export async function GET(req) {
  const { id } = req.params;
  const destination = await Destination.findById(id);
  return new Response(JSON.stringify(destination), { status: 200 });
}

export async function PUT(req) {
  const { id } = req.params;
  const data = await req.json();
  const updated = await Destination.findByIdAndUpdate(id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req) {
  const { id } = req.params;
  await Destination.findByIdAndDelete(id);
  return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });
}
