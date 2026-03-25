import express from "express";
import { getTodosWithStats } from "./services/todo.service";

const app = express();

app.get("/todos/:date", async (req, res) => {
  const data = await getTodosWithStats(req.params.date);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running");
});