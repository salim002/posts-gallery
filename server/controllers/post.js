import {db} from "../config/db.js";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs"

export const getPosts = (req, res)=>{
    const q = req.query.cat ? "SELECT * FROM post WHERE cat=?" : "SELECT * FROM post";

    db.query(q, [req.query.cat], (err, data)=>{
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
}

export const getPost = (req, res) => {
    // console.log(req.params);
    const q =
      "SELECT p.id, `username`, `title`, `desc`, p.img, `cat`,`date` FROM users u JOIN post p ON u.id = p.uid WHERE p.id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

export const addPost = (req, res)=>{
    // console.log(req.body);
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json("Not Authenticated")
    }

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err){
            return res.status(403).json("Token is not valid!");
        }

        const q = "INSERT INTO post (`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)";
        const values = [
            req.body.title,
            req.body.desc,
            req.file.filename,
            req.body.cat,
            req.body.date,
            userInfo.id
        ]
        db.query(q, [values], (err, data)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.json("Post has been created");
        })
    })
}

export const deletePost = (req, res)=>{
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json("Not Authenticated")
    }

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err){
            return res.status(403).json("Token is not valid!");
        }

        const postId = req.params.id;
        const imgQeury = "SELECT `img` FROM post WHERE `id`= ? AND `uid` = ?";
        db.query(imgQeury, [postId, userInfo.id], (err, data)=>{
            if(err){
                return res.status(500).json("Some internal error occured");
            }
            const image = data[0].img;
            // console.log(image);
            const imagePath = path.join("public/upload", image);
            // console.log(imagePath);
            fs.unlinkSync(imagePath);
        })

        const q = "DELETE FROM post WHERE `id` = ? AND `uid` = ?";
        db.query(q, [postId, userInfo.id], (err, data)=>{
            if(err){
                return res.status(403).json("You can delete only your posts!");
            }
            return res.status(200).json("Post has been deleted successfully!");
        })
    })
}

export const updatePost = (req, res)=>{
    // console.log(req.body);
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).json("Not Authenticated")
    }

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err){
            return res.status(403).json("Token is not valid!");
        }
        const postId=req.params.id;
        const q = "UPDATE post SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=? AND `uid`=?";
        const values = [
            req.body.title,
            req.body.desc,
            req.file.filename,
            req.body.cat,
        ]
        db.query(q, [...values, postId, userInfo.id], (err, data)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.json("Post has been updated");
        })
    })
}
