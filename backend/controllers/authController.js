import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwtUtils.js";

export const signup = async(req, res)=>{
    const {fullName, email, password, phone, companyName, isAgency} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({error: "User already Exist"})
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fullName,
            email,
            password: hashedPassword,
            phone,
            companyName,
            isAgency
        })
        await user.save();

        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: "production",
            sameSite: "strict",
            maxAge: 10*60*60*1000
        })
        
        res.status(201).json({
            token,
            user: {
                _id: user._id,
                fullname: user.fullName,
                email: user.email,
                phone: user.phone,
                companyName: user.companyName,
                isAgency: user.isAgency
            }
        })
    }catch(err){
        return res.status(500).json({error: "Something went wrong"})
    }
}

export const login = async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: "Invalid credentials"});

        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", 
            sameSite: "strict",
            maxAge: 10 * 60 * 60 * 1000,
        });

        res.status(201).json({
            token,
            user: {
                _id: user._id,
                fullname: user.fullName,
                email: user.email,
                phone: user.phone,
                companyName: user.companyName,
                isAgency: user.isAgency
            }
        });

    }catch(err){
        res.status(500).json("Server error");
    }
}

export const logout = async(req, res)=>{
    res.cookie("token", "", { maxAge: 0 }); // Remove token from cookies
    res.status(501).json({message: "User logged out successfully"})
}