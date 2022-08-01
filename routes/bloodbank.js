import express from "express";
import {
  addBloodbank,
  getBloodbanks,
  getSpecificBloodbank,
} from "../controllers/bloodbank.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { success, bloodbankData } = await getBloodbanks(req.query);
  const code = success ? 200 : 400;
  res.status(code).send(bloodbankData);
});

router.post("/", async (req, res) => {
  const { success, newBloodbankData } = await addBloodbank(req.body);
  const code = success ? 200 : 400;
  res.status(code).send(newBloodbankData);
});

router.post("/group", async (req, res) => {
  const { success, bloodbankData } = await getSpecificBloodbank(req.body);
  console.log(req.body.blood_group);
  const code = success ? 200 : 400;
  res.status(code).send(bloodbankData);
});

export default router;
