import express from "express";

const router = express.Router();

import caregiverRoutes from "./caregiver.js";
import patientRoutes from "./patient.js";

router.use("/caregiver", caregiverRoutes);
router.use("/patient", patientRoutes);

export default router;
