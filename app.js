import express from "express";
const app = express();
import { userRouter } from "./api/users/user-router.js";
import { endpoints } from "./config/endpoints.js";

app.use(express.json());
app.use(endpoints.users, userRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
