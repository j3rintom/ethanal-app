import express from "express";
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { success, user } = await registerUser(req.body);
  const code = success ? 200 : 400;
  res.status(code).send(user);
});

router.post("/login", async (req, res) => {
  const { success, user, errorMessage } = await loginUser(req.body);
  //console.log(errorMessage);
  const code = success ? 200 : 400;
  res.status(code).send(user);
});

export default router;
