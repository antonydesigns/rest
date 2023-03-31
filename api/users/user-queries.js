import { db } from "../../config/database.js";

export const fetchAllUsersQuery = (callBack) => {
  const stmt = `SELECT username FROM users`;
  const process = (error, results, fields) => {
    // if database connection is bad, callback passes an error to the Controller
    if (error) return callBack(error);

    // if everything is OK, callback passes null error and positive results to the Controller
    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, [], process);
};

export const fetchOneUserQuery = (data, callBack) => {
  const stmt = `SELECT username FROM users WHERE id=?`;
  const entries = [data.id];
  const process = (error, results, fields) => {
    if (error) return callBack(error);

    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, entries, process);
};

export const patchOneUserQuery = (data, callBack) => {
  const stmt = `UPDATE users SET username=?, password=? WHERE id=?`;
  const entries = [data.username, data.password];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // PATCH request to the MySQL database
  db.query(stmt, entries, process);
};

export const addUserQuery = (data, callBack) => {
  const stmt = `INSERT INTO users(username, password) values(?, ?)`;
  const entries = [data.username, data.password];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // POST request to the MySQL database
  db.query(stmt, entries, process);
};

export const deleteUserQuery = (data, callBack) => {
  const stmt = `DELETE FROM users WHERE id=?`;
  const entries = [data.id];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, entries, process);
};
