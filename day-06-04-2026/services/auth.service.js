const bcrypt =require("bcrypt");
const {User} = require("../models");

const{
    generateAccessToken,
    generateRefreshToken
}=require("../utils/jwt");


exports,registerUser = async(data)=>{
    return await User.create(data);
}

exports.loginUser = async(email,password)=>{
    const user = await User.findone({where:{email}});

    if(!user) throw new Error("User not found");
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) throw new Error("Invalid password");

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
}