import {
  fetchAllUsersQuery,
  fetchOneUserQuery,
  patchUserQuery,
  addUserQuery,
  deleteUserQuery,
} from "./user-queries.js";
import { genSaltSync, hashSync } from "bcrypt";

const resMsg = {
  dbConnectError: {
    message: "Database connection error",
  },
  recordNotFound: {
    message: "Record not found",
  },
  updateFailed: {
    message: "Failed to update",
  },
  deleteFailed: {
    message: "Failed to delete",
  },
};

export const fetchAllUsers = (req, res) => {
  fetchAllUsersQuery((err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
    if (!results) return res.json(resMsg.recordNotFound);
    return res.status(200).json({ data: results });
  });
};

export const fetchOneUser = (req, res) => {
  const id = req.params.id;
  fetchOneUserQuery(id, (err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
    if (!results) return res.json(resMsg.recordNotFound);
    return res.status(200).json({ data: results });
  });
};

export const patchUser = (req, res) => {
  const body = req.body;
  body.id = req.params.id;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  patchUserQuery(body, (err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
    if (!results) return res.json(resMsg.updateFailed);
    return res.status(200).json({ data: results });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserQuery(id, (err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
    if (!result) return res.json(resMsg.deleteFailed);
    return res.status(200).json({ data: results });
  });
};

export const addUser = (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  addUserQuery(body, (err, results) => {
    if (err) return res.status(500).json(resMsg.dbConnectError);
    return res.status(200).json({ data: results });
  });
};
