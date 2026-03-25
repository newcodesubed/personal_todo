import { pool } from "./db";

const start = async () => {
  const res = await pool.query("SELECT NOW()");
  console.log("Current time from DB:", res.rows);
};

start();