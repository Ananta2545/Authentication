import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req, res)=>{
    const {fullname, email, password, phone, companyName, isAgency} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({error: "User already Exist"})
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fullname,
            email,
            password: hashedPassword,
            phone,
            companyName,
            isAgency
        })
        await user.save();

        const token = generateToken(user.id);

        res.status(201).json()
    }catch(err){
        return res.status(500).json({error: "Something went wrong"})
    }
}