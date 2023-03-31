import db from "../../config/database.js";

export const addUserQuery = (data, callBack) => {
  const stmt = `INSERT INTO users(username, password) values(?, ?)`;
  const entries = [data.username, data.password];
  const process = (error, result, fields) => {
    if (error) {
      return callBack(error);
    }
    return callBack(null, results);
  };
  db.query(stmt, entries, process);
};
