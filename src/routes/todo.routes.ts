import { Router } from "express";
import { createTodoController, deleteTodoController, getTodosByDateController, updateTodoController } from "../controllers/todo.controller";

const route = Router();

route.get("/:date", getTodosByDateController);
route.post('/', createTodoController);
route.put("/:id", updateTodoController);
route.delete("/:id", deleteTodoController);

export default route;