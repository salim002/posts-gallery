import mysql from "mysql";

const pool = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12646981",
  password: "Ye8CMwYKx2",
  database: "sql12646981",
  connectionLimit: 10, 
});

export const db = pool;

pool.on("error", (err) => {
  console.error("Database pool error:", err);
});
