import { createDay, getDayByDate } from "../repositories/day.repository";

export const getOrCreateDay = async (date: string) => {
    const existingDay = await getDayByDate(date);

    if (existingDay) return existingDay;

    return createDay(date);
};