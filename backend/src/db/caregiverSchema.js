import mongoose from "mongoose";

const Schema = mongoose.Schema;

const caregiverSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["User", "Admin"] },
    caregiverPatients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
  },
  {
    timestamps: true,
  }
);

export const Caregiver = mongoose.model("Caregiver", caregiverSchema);
