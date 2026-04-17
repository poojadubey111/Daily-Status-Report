const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports=(req,res,next)=>{
    try{
        console.log("HEADER:", req.headers.authorization);
        const token= req.headers.authorization.split(" ")[1];
   console.log("token:", token);
        if(!token){
            throw new Error("No token provided");
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
console.log("JWT SECRET:", process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({error:"Unauthorized"});
    }
}