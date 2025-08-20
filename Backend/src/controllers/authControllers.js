import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// register 
export const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await User.create({name,email,password,role});

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
         

        res.status(201).json({
            _id: newUser._id,
            name : newUser.name,
            email : newUser.email,
            password : newUser.password,
            role : newUser.role,
            token
        })
        await newUser.save();

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};