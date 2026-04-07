const bcrypt = require("bcrypt");
const { User } = require("../models");

const {
    generateAccessToken,
    generateRefreshToken
}= require("../utils/jwt");

exports.register = async(req,res)=>{
    const {name, email, password,role}= req.body;
    const hashedPassword=await bcrypt.hash(password,10);

    const user  =await User.create({
        name,email,
        password:hashedPassword,
        role
    });
    res.json(user);
};

exports.login = async(req,res) =>{
    const { email,password} = req.body;
    const user= await User.findOne({ where:{email}});

    if(!user) return res.status(404).send("User not found");

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch) return res.status(401).send("Wrong password");
    const accessToken= generateAccessToken(user);
    const refreshToken= generateRefreshToken(user);

    res.json({ accessToken,refreshToken});
};