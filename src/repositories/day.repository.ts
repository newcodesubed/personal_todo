import { pool } from "../db";

export const createDay = async (date: string) => {
    const result = await pool.query(
        'INSERT INTO days (date, status) VALUES ($1, $2) RETURNING *',
        [date, "red"]
    );
    return result.rows[0];
};
export const getDays = async () => {
    const res = await pool.query(
        'SELECT * FROM days'
    );
    return res.rows;
}

export const getDayByDate = async (date: string) => {
    const result = await pool.query(
        "SELECT * FROM days WHERE date = $1",
        [date]
    );

    return result.rows[0];
};

export const updateDayStats = async (
    dayId: number,
    ratio: number,
    status: "red" | "green"
) => {
    const result = await pool.query(
        `
    UPDATE days
    SET completion_ratio = $1,
        status = $2
    WHERE id = $3
    RETURNING *
    `,
        [ratio, status, dayId]
    );

    return result.rows[0];
};