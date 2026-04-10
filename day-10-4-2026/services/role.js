const {Role} = require("../models");
exports.createRole = async({role_name,description})=>{
    let role =await Role.create({
        role_name,
        description
    })
    if(!role){
        throw new Error("Failed to create role");
    }
    else{
        return role;
    }
}
console.log("Role:", Role);
