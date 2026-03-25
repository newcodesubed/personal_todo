import { getTodosByDate, getTodoStatsByDate } from "../repositories/todo.repository";

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