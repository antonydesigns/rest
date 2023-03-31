import { db } from "../../config/database.js";

export const addUserQuery = (data, callBack) => {
  const stmt = `INSERT INTO users(username, password) values(?, ?)`;
  const entries = [data.username, data.password];
  const process = (error, results, fields) => {
    if (error) {
      return callBack(error);
      // if database connection is bad, callback passes an error to the Controller
    }
    // if everything is OK, callback passes null error and positive results to the Controller
    return callBack(null, results);
  };

  // POST request to the MySQL database
  db.query(stmt, entries, process);
};
