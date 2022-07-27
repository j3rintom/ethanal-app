import express from "express";
import { addCampaign, getCampaigns } from "../controllers/campaign.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { success, campaigns } = await getCampaigns();
  const code = success ? 200 : 400;
  res.status(code).send(campaigns);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) req.status(404);

  const { success, newCampaign } = await addCampaign(req.body);
  const code = success ? 200 : 400;
  res.status(code).send(newCampaign);
});

export default router;
