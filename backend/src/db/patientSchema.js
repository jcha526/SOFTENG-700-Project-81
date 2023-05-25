import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    patientId: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    medicalDetails: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Patient = mongoose.model("Patient", patientSchema);
