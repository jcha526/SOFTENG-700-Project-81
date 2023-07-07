import express from "express";
import { Data } from "../../db/dataSchema.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    console.log(req.body.links[0].R);
    const data = await Data.create({distY: req.body.links[0].R, distZ: req.body.links[1].R});
    res.status(200).json(req.body);
  } catch {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  res.status(200);
});

export default router;
