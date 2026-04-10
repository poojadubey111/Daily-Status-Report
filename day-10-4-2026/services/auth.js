const { generateToken } = require("../utils/jwt");
const {User,Role, Permission, sequelize} = require("../models");
const permission = require("../models/permission");
const { RolePermission } = require("../models");
// const RolePermission = require("../models");
const bcrypt = require("bcrypt");

console.log("AUTH ROUTER LOADED");
exports.register =async({name,email,password,role_id})=>{
    const hashed = await bcrypt.hash(password,10);
    const existRoleId = await Role.findByPk(role_id);

    if(!existRoleId){
        throw new Error("role id not found");
    }

    const user =await User.create({name,email,password:hashed,role_id:role_id});

    return user;
}

exports.login=async({email,password})=>{
    const user = await User.findOne({
        where:{email}
    });

    if(!user) throw new Error("User Not found");

    const valid = await bcrypt.compare(password,user.password);
    if(!valid) throw new Error("Invalid password");

   exports.login = async({email,password})=>{
    const user = await User.findOne({ where:{email} });

    if(!user) throw new Error("User Not found");

    const valid = await bcrypt.compare(password,user.password);
    if(!valid) throw new Error("Invalid password");

    return user; // ✅ only return user
};
    // return {
    //     user,token
    // };
};

exports.getAllUsers=async()=>{
        let users = await User.findAll();
        if(!users){
            throw new Error("users not found");
        }else{
            return users;
        }
        
    }

    exports.createPermission=async({base_name,method,url})=>{
        let permission = await Permission.create({
            base_name,
            method,
            url
        })
        return permission;
    }

    exports.createRolePermission = async({role_id,permission_id})=>{
        let rolePermission = await RolePermission.create({
            role_id,
            permission_id
        })
        return rolePermission;
    }
 exports.createRole = async ({ role_name, description }) => {
    const role = await Role.create({
        role_name,
        description
    });
    return role;
};
