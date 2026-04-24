const { Sequelize } = require("sequelize");
const { User, Role } = require("../models");
const bcrypt = require("bcrypt");


// ✅ Create User (Admin use case)
exports.createUser = async ({ name, email, password,role_id }) => {
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const existRoleId = await Role.findByPk(role_id);

  if(!existRoleId){
   throw new Error("Role id not found");
    
   
  }
   
  

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role_id:role_id
  });

  // assign role
  if (roleName) {
    const role = await Role.findOne({ where: { name: roleName } });

    if (!role) throw new Error("Role not found");

    await user.addRole(role);
  }

  return user;
};

exports.getAllUsers = async()=>{
    let users = await user.findAll();
    if(!users){
        throw new Error("users not found")
    }
    else{
        return users;
    }

}