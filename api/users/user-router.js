import express from "express";
const router = express.Router();
import { addUser } from "./user-controller.js";

export const userRouter = router.post("/", addUser);
