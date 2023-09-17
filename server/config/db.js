import mysql from "mysql";

export const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12646981",
  password: "Ye8CMwYKx2",
  database: "sql12646981"
});

db.connect((err) => {
  if(err){
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Database connected successfully!");
});
