import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import multer from "multer";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../client/public/upload')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname)
//     }
// })
// const upload = multer({ storage })
// app.post('/api/upload', upload.single('file'), function (req, res){
//     const file = req.file;
//     return res.status(200).json(file?.filename || null);
// })
app.use(express.static("public/upload"));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, ()=>{
    console.log(`Server is running on http://localhost:8800`);
})