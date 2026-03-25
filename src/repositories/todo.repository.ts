import { pool } from "../db";

export const createTodo = async (dayId: string, text: string) => {
    const result = await pool.query(
        'INSERT INTO todos (day_id, text) VALUES ($1, $2) RETURNING *',
        [dayId, text]
    );
    return result.rows[0];
}

export const getTodosByDay = async (dayId: string) => {
    const result = await pool.query(
        'SELECT * FROM todos WHERE day_id = $1',
        [dayId]
    );
    return result.rows;
}

export const updateTodo = async (id: string, text: string, isCompleted: boolean) => {
    const result = await pool.query(
        'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 RETURNING *',
        [text, isCompleted, id]
    );
    return result.rows[0];
}

export const deleteTodo = async (id: string) => {
    const result = await pool.query(
        'DELETE FROM todos WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
}