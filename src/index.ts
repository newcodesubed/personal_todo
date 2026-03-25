import { pool } from "./db";

const start = async () => {
  await pool.query(
    'INSERT INTO days (date, status) VALUES ($1, $2)',
    ['2026-03-25', 'red']
  );
  const res = await pool.query(
    'SELECT * FROM days'
  );
  console.log(res.rows);
};

start();