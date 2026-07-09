import express from "express";
import { signup, login, resetPassword } from "../controllers/auth.controller.js";

const router = express.Router();
//router level middleware
router.use((req, res, next) => {
  console.log("Router level middleware activated");
  next();
});

router.get("/login", login);

router.get("/signup", signup);

router.get("/reset-password", resetPassword);

export default router;