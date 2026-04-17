const {Role} = require('../models');

exports.createRole =async(role_name)=>{
     if(!role_name){
        throw new Error("Role name is required");
    }
    let role = await Role.create({
        name:role_name
    })
  return role;
}
