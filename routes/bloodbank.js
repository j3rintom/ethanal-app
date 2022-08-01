import express from "express";
import { addBloodbank, getBloodbanks } from "../controllers/bloodbank.js";

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

export default router;
