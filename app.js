import express from "express";

const app = express();

const endpoints = {
  getAll: "/api/",
};

app.get(endpoints.getAll, (req, res) => {
  const data = { success: 1, message: "hello world" };
  res.json(data);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
