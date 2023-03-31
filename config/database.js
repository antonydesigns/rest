import * as dotenv from "dotenv";
dotenv.config();
import { createPool } from "mysql";

export const db = createPool({
  port: process.env.dev_port,
  host: process.env.dev_host,
  user: process.env.dev_user,
  password: process.env.dev_password || "",
  database: process.env.dev_database,
});
