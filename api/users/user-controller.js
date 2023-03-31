import { addUserQuery } from "./user-queries";
import { genSaltSync, hashSync } from "bcrypt";

export const addUser = (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  addUserQuery(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};
