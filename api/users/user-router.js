import express from "express";
const router = express.Router();
import {
  fetchAllUsers,
  fetchOneUser,
  patchUser,
  addUser,
  deleteUser,
} from "./user-controller.js";

router.get("/", fetchAllUsers);
router.get("/:id", fetchOneUser);
router.patch("/:id", patchUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);

export const userRouter = router;
