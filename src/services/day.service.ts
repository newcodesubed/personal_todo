import { createDay, getDayByDate } from "../repositories/day.repository";

export const getOrCreateDay = async (date: string) => {
    const existingDay = await getDayByDate(date);

    if (existingDay) return existingDay;

    return createDay(date);
};

export const calculateDayStatus = (todos: any[]) => {
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