import { db } from "../../config/database.js";

export const fetchAllUsersQuery = (callBack) => {
  const stmt = `SELECT username, password, email FROM users`;
  const process = (error, results, fields) => {
    // if database connection is bad, callback passes an error to the Controller
    if (error) return callBack(error);

    // if everything is OK, callback passes null error and positive results to the Controller
    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, [], process);
};

export const fetchOneUserQuery = (id, callBack) => {
  const stmt = `SELECT username, password, email FROM users WHERE id=?`;
  const entries = [id];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, entries, process);
};

export const patchUserQuery = (data, callBack) => {
  const stmt = `UPDATE users SET username=?, password=?, email=? WHERE id=?`;
  const entries = [data.username, data.password, data.email, data.id];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // PATCH request to the MySQL database
  db.query(stmt, entries, process);
};

export const addUserQuery = (data, callBack) => {
  const stmt = `INSERT INTO users(username, password, email) values(?, ?, ?)`;
  const entries = [data.username, data.password, data.email];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // POST request to the MySQL database
  db.query(stmt, entries, process);
};

export const deleteUserQuery = (data, callBack) => {
  const stmt = `DELETE FROM users WHERE id=?`;
  const entries = [id];
  const process = (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  };
  // GET request to the MySQL database
  db.query(stmt, entries, process);
};
