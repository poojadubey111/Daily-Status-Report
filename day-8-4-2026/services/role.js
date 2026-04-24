// const bcrypt = require("bcrypt");
const {User,Role} = require("../models");
// const { generateToken } = require("../utils/jwt");

exports.createRole = async({role_name,description})=>{
      
    let role = await Role.create({
        role_name,
        description
    })

    if(!role){
        throw new Error("Failed to create role")
    }
    else{
        return role
    }
}