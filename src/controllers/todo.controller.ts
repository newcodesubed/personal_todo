import { Request, Response } from "express";
import { getTodosWithStats } from "../services/todo.service";

export const getTodosByDateController = async (req: Request<{ date: string }>, res: Response) => {
    try {
        const { date } = req.params;
        const data = await getTodosWithStats(date);
        res.status(200).json({ message: "Todos fetched successfully", data })
    } catch (error) {
        res.status(400).json({ message: "Error getting todos", error })
    }
}