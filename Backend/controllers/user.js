import {User} from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

export const Login = async (req,res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message : "Fill all detail",
                success : false
            })
        };

        const user = await User.findOne({email});

        if(!user){
           return res.status(401).json({
                message : "User does not exist",
                success : false
            });
        }

        const isMatch = await bcryptjs.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                message : "Invalid email and password",
                success : false
            });
        }

        const tokenData = {
            id:user._id,
            
        }

        const token = await jwt.sign(tokenData,"asdfghjkl",{expiresIn:"1d"});
        // console.log(user);
        return res.status(200).cookie("token",token, {httpOnly:true}).json({
                message:`Welcome back ${user.fullName}`,
                user,
                success:true
        });

    }catch(e){
        console.log(`Error in login page ${e}`);
    }
    
}

export const Logout = async(req, res) => {
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"User Logged out successfully",
        success : true
    })
}


export const register = async(req,res) => {
        try{
            const {fullName, email, password} = req.body;

            if(!fullName || !email || !password){
                console.log("Please enter all detail");
                return res.status(401).json({
                    message: "Invalid data",
                    success: false,
                })
            }

            const user = await User.findOne({email});
            if(user){
                console.log("Email already exist");
                return res.status(401).json({
                    message: "Email already exist",
                    success: false,
                })
            }

            const hashedPassword = await bcryptjs.hash(password,10);

            await User.create({
                fullName,
                email,
                password : hashedPassword
            });

            console.log("User created succesfully");
            return res.status(200).json({
                 message: "User created succesfully",
                 success: true,
             })

        } catch(e){
                console.log(`Error during registration ${e}`);
        }
}