import {db} from "../db.js";
import bcrypt from "bcryptjs";

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

}

export const logout = (req, res)=>{

}
