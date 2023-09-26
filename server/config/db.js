import mysql from "mysql";

const pool = mysql.createPool({
  host: "db4free.net",
  user: "mdsalim",
  password: "Mysql@9876",
  database: "mdsalimmysqldb",
  connectionLimit: 10, 
});

export const db = pool;

pool.on("error", (err) => {
  console.error("Database pool error:", err);
});
