import { createDay, getDayByDate, updateDayStats } from "../repositories/day.repository";
import { getTodosByDayId } from "../repositories/todo.repository";

export const refreshDayStats = async (dayId: number) => {
    const todos = await getTodosByDayId(dayId);

    const { status, ratio } = calculateDayStatus(todos);

    return updateDayStats(dayId, ratio, status);
};

export const getOrCreateDay = async (date: string) => {
    const existingDay = await getDayByDate(date);

    if (existingDay) return existingDay;

    return createDay(date);
};

export const calculateDayStatus = (todos: any[]): { status: "red" | "green"; ratio: number } => {
    const total = todos.length;

    if (total === 0) {
        return { status: "red", ratio: 0 };
    }

    const completed = todos.filter((t) => t.completed).length;

    const ratio = completed / total;

    if (ratio >= 2 / 3) {
        return { status: "green", ratio };
    }

    return { status: "red", ratio };
};