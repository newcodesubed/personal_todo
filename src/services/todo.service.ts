import { createDay, getDayByDate } from "../repositories/day.repository";
import { createTodo, getTodosByDate, getTodoStatsByDate } from "../repositories/todo.repository";
import { getOrCreateDay } from "./day.service";

export const getTodosWithStats = async (date: string) => {
    const [todos, stats] = await Promise.all([
        getTodosByDate(date),
        getTodoStatsByDate(date)
    ]);

    return {
        date,
        stats,
        todos
    };
};

export const createTodoService = async (date: string, text: string) => {
    if (!date) {
        throw new Error("Date is required")
    }
    if (!text) {
        throw new Error("Text is required")
    }
    const day = await getOrCreateDay(date)
    return createTodo(day.id, text)
}
