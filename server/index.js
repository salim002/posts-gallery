import express from "express";
const app = express();

app.use(express.json());


app.get("/test", (req, res)=>{
    return res.json("It works!")
})

app.listen(8800, ()=>{
    console.log(`Server is running on https://localhost:8800`);
})