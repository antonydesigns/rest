import {
  fetchAllUsersQuery,
  fetchOneUserQuery,
  patchOneUserQuery,
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

export const patchOneUser = (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  patchOneUserQuery(body, (err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
    // error message for failed to update / patch?
    return res.status(200).json({ data: results });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserQuery(id, (err, results) => {
    if (err) return res.json(resMsg.dbConnectError);
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
