import express from "express";
import { Patient } from "../../db/patientSchema.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const data = await Patient.create(req.body);
    res.status(201).json(data);
  } catch {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  res.status(200);
});

export default router;
