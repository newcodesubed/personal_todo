import { Result } from "pg";
import { pool } from "../db";

export const createDay = async (date: string, status: string) => {
    const result = await pool.query(
        'INSERT INTO days (date, status) VALUES ($1, $2) RETURNING *',
        [date, status]
    );
    return result.rows[0];
};
export const getDays = async () => {
    const res = await pool.query(
        'SELECT * FROM days'
    );
    return res.rows;
}
