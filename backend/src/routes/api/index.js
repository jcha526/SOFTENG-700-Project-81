import express from "express";
import caregiverRoutes from "./caregiver.js";
import patientRoutes from "./patient.js";

const router = express.Router();

router.use("/caregiver", caregiverRoutes);
router.use("/patient", patientRoutes);

export default router;
