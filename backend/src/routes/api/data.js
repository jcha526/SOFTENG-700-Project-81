import express from "express";
import { Data } from "../../db/dataSchema.js";

const router = express.Router();

//This is used by the Tag
router.post("/create", async (req, res) => {
  try {
    console.log(req.body.links[0].R);
    const data = await Data.create({distY: req.body.links[0].R, distZ: req.body.links[1].R});
    res.status(200).json(req.body);
  } catch {
    res.status(400).json({ message: error.message });
  }
});

//This is used by the mobile app
router.get("/latest", async (req, res) => {
  try {
    const data = await Data.find().sort({ _id: -1 }).limit(1);
    res.status(200).json(data);
  } catch {
    res.status(400).json({ message: "An error occured" });
  }
});

router.get("/", async (req, res) => {
  res.status(200);
});

export default router;
