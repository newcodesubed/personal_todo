import { createDay, getDayByDate } from "../repositories/day.repository";
import { createTodo, getTodosByDate, getTodoStatsByDate } from "../repositories/todo.repository";

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
    let day = await getDayByDate(date);

    if (!day) {
        day = await createDay(date)
    }
    return await createTodo(day.id, text)
}
