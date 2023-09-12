import mysql from "mysql";

export const db = mysql.creatConnection({
    host: "localhost",
    user: "root",
    password: "Mdsalim@123",
    database: "posts"
})