import express from "express";
import todoRoutes from "./routes/todo.routes";

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});