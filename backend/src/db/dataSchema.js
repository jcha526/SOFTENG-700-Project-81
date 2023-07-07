import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    distY: { type: Number, required: true },
    distZ: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Data = mongoose.model("Data", dataSchema);
