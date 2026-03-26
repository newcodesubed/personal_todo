import { Router } from "express";
import { createTodoController, getTodosByDateController, updateTodoController } from "../controllers/todo.controller";

const route = Router();

route.get("/:date", getTodosByDateController);
route.post('/', createTodoController);
route.put("/:id", updateTodoController);

export default route;