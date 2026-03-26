import { Router } from "express";
import { createTodoController, getTodosByDateController } from "../controllers/todo.controller";

const route = Router();

route.get("/:date", getTodosByDateController);
route.post('/', createTodoController);

export default route;