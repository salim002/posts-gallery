import {db} from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{
    // console.log(req.body);

    // CHECK EXISTING USER
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json("All fields are required");
    }
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [email, username], (err, data)=>{
        if(err){
            return res.json(err);
        }
        if(data.length){
            return res.status(409).json("User already exists!");
        }

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const q2 = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            username,
            email,
            hash
        ]

        db.query(q2, [values], (err, data)=>{
            if(err){
                return res.json(err);
            }
            return res.status(200).json("User has been created!");
        })
    })
}

export const login = (req, res)=>{
    // console.log(req.body);
    if(!req.body.username || !req.body.password){
        return res.status(400).json("All fields are required");
    }
    // Check User
    const q = "SELECT * FROM users WHERE username=?"
    db.query(q, [req.body.username], (err, data)=>{
        // console.log(data);
        if(err){
            return res.status(500).json(err);
        }
        if(data.length===0){
            return res.status(404).json("User not found");
        }
        const isCorrectPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isCorrectPassword){
            return res.status(400).json("Invalid Credentials");
        }
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        return res.status(200).json({token, other});
    })
}