const {User,Role} = require("../models");
const bcrypt = require('bcrypt');    
const {generateToken}=require("../utils/jwt")          

// -----------------------------Register start ----------------------------------------------------------------
exports.register = async({name,email,password,role_id}) =>{
    // first implement validation to validate data because it is required feild so..
    if(!name || !email || !password){
        //if not provided throw Error
        throw new Error("All feilds are required"); 
    }

    //i implement regex password because it is required 

    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
    
    if(!regex.test(password)){
        throw new Error("Password must be strong");
    }

    //check for user existance
    const exist = await User.findOne({where : {email}});
    if(exist){
        throw new Error("Email already registered");
    }

    const hashed =await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashed,
        role_id
    });

    return user;
}
// ----------------------------Register End---------------------------------

// ---------------------------- Login start---------------------------------

exports.login = async ({email,password})=>{
//first check user is present or not 
//then i compare the entered password and stored password
//then i generate token

    const user = await User.findOne({where  :{email}});
    if(!user){
        throw new Error("User not found");
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match) {
        throw new Error("Invalid password");
    }

    const token= generateToken(user);
    return{ user,token};

}

// ---------------------------- Login End-----------------------------------
