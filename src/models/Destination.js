import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Destination = mongoose.models.Destination || mongoose.model("Destination", DestinationSchema);
export default Destination;
