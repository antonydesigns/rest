import express from "express";
const app = express();
import { userRouter } from "./api/users/user-router.js";
import { endpoints } from "./config/endpoints.js";

// Utils
app.use(express.json());

// Express routers and valid endpoints to interact with MySQL tables
app.use(endpoints.users, userRouter);

// Activate
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
