import { Request, Response } from "express";
import { createTodoService, getTodosWithStats, updateTodoService } from "../services/todo.service";

export const getTodosByDateController = async (req: Request<{ date: string }>, res: Response) => {
    try {
        const { date } = req.params;
        const data = await getTodosWithStats(date);
        res.status(200).json({ message: "Todos fetched successfully", data })
    } catch (error) {
        res.status(400).json({ message: "Error getting todos", error })
    }
}

export const createTodoController = async (req: Request<{ date: string, text: string }>, res: Response) => {
    try {
        const { date, text } = req.body;
        const todo = await createTodoService(date, text)
        res.status(200).json({ message: "Todo created successfully", todo })
    } catch (error) {
        res.status(400).json({ message: "Error creating todo", error })
    }
}

export const updateTodoController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { text, completed } = req.body;

        const todo = await updateTodoService(id, text, completed);

        res.status(200).json(todo);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};