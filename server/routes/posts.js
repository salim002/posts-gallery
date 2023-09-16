import express from "express"
const router = express.Router();

import {getPosts, getPost, addPost, deletePost, updatePost} from "../controllers/post.js";

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, `public/upload`);
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({storage: storage});

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", upload.single("file"), addPost)
router.delete("/:id", deletePost)
router.put("/:id", upload.single("file"), updatePost)


export default router;