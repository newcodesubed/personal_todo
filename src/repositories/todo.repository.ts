import { pool } from "../db";
type Todo = {
    id: number;
    day_id: number;
    text: string;
    completed: boolean;
};
type TodoWithDay = Todo & {
    date: string;
}
type TodoStats = {
    date: string;
    total: number;
    completed: number;
    completion_ratio: number;
};

export const getTodoStatsByDate = async (date: string) => {
    const result = await pool.query<TodoStats>(
        `
    SELECT 
      t.*,
      d.date,
      COUNT(t.id) OVER () AS total,
      COUNT(CASE WHEN t.completed = true THEN 1 END) OVER () AS completed
    FROM todos t
    JOIN days d ON t.day_id = d.id
    WHERE d.date = $1
    `,
        [date]
    );

    return result.rows;
};
export const createTodo = async (dayId: number, text: string) => {
    const result = await pool.query<Todo>(
        `INSERT INTO todos (day_id, text) VALUES ($1, $2) RETURNING *`,
        [dayId, text]
    );
    return result.rows[0];
}

export const getTodosByDay = async (dayId: number) => {
    const result = await pool.query<Todo>(
        'SELECT * FROM todos WHERE day_id = $1',
        [dayId]
    );
    return result.rows;
}

export const updateTodo = async (id: number, text: string, completed: boolean) => {
    const result = await pool.query<Todo>(
        'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 RETURNING *',
        [text, completed, id]
    );
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
}

export const deleteTodo = async (id: number) => {
    const result = await pool.query<Todo>(
        'DELETE FROM todos WHERE id = $1 RETURNING *',
        [id]
    );
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
}

export const getTodosWithDay = async () => {
    const result = await pool.query<TodoWithDay>(`
    SELECT t.*, d.date
    FROM todos t
    JOIN days d ON t.day_id = d.id
  `);

    return result.rows;
};

export const getTodosByDate = async (date: string) => {
    const result = await pool.query(
        `
    SELECT t.*
    FROM todos t
    JOIN days d ON t.day_id = d.id
    WHERE d.date = $1
    `,
        [date]
    );

    return result.rows;
};