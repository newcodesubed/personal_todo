import { createTodo, deleteTodo, getTodosByDate, getTodoStatsByDate, updateTodo } from "../repositories/todo.repository";
import { getOrCreateDay, refreshDayStats } from "./day.service";

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
    const todo = await createTodo(day.id, text);


    await refreshDayStats(day.id);

    return todo;
}

export const updateTodoService = async (id: number, text: string, completed: boolean) => {
    if (!id) {
        throw new Error("Id is required");
    }
    if (!text) {
        throw new Error("Text is required");
    }
    if (typeof completed !== "boolean") {
        throw new Error("completed must be boolean");
    }

    const updated = await updateTodo(id, text, completed)
    if (!updated) {
        throw new Error("Todo not found");
    }
    await refreshDayStats(updated.day_id);
    return updated;
}

export const deleteTodoService = async (id: number) => {
    if (!id) {
        throw new Error("Todo id is required");
    }

    const deleted = await deleteTodo(id);

    if (!deleted) {
        throw new Error("Todo not found");
    }

    return deleted;
};