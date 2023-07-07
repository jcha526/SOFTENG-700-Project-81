import express from "express";
import caregiverRoutes from "./caregiver.js";
import patientRoutes from "./patient.js";
import dataRoutes from "./data.js";

const router = express.Router();

router.use("/caregiver", caregiverRoutes);
router.use("/patient", patientRoutes);
router.use("/data", dataRoutes);

export default router;
