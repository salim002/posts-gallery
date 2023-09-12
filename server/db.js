import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mdsalim@123",
  database: "posts"
});

// Callback function to handle the connection event
db.connect((err) => {
  if(err){
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Database connected successfully!");
});
