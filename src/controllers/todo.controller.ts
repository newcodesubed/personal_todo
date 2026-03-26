import { Request, Response } from "express";
import { createTodoService, deleteTodoService, getTodosWithStats, updateTodoService } from "../services/todo.service";

export const getTodosByDateController = async (req: Request<{ date: string }>, res: Response) => {

    const { date } = req.params;
    const data = await getTodosWithStats(date);
    res.status(200).json({ message: "Todos fetched successfully", data })

}

export const createTodoController = async (req: Request<{ date: string, text: string }>, res: Response) => {

    const { date, text } = req.body;
    const todo = await createTodoService(date, text)
    res.status(200).json({ message: "Todo created successfully", todo })

}

export const updateTodoController = async (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const { text, completed } = req.body;

    const todo = await updateTodoService(id, text, completed);

    res.status(200).json(todo);

};

export const deleteTodoController = async (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const todo = await deleteTodoService(id);

    res.status(200).json(todo);

};