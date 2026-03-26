import { Router } from "express";
import { createTodoController, deleteTodoController, getTodosByDateController, updateTodoController } from "../controllers/todo.controller";

import { asyncHandler } from "../middleware/asyncHandler";
import { validate } from "../middleware/validate";
import { createTodoSchema, updateTodoSchema } from "../validators/todo.validator";

const route = Router();

route.get("/:date", asyncHandler(getTodosByDateController));
route.post('/', validate(createTodoSchema), asyncHandler(createTodoController));
route.put("/:id", validate(updateTodoSchema), asyncHandler(updateTodoController));
route.delete("/:id", asyncHandler(deleteTodoController));

export default route;