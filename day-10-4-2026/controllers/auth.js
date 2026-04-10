const authService = require("../services/auth");
const { generateToken } = require("../utils/jwt");

exports.register = async(req,res)=>{
    try{
        const user = await authService.register(req.body);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        // 🔴 FIX 1: check user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // 🔴 FIX 2: check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }
  const token = generateToken(user);
        // ✅ SAFE to use user.id now
        return res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                email: user.email,
                role_id: user.role_id
            }
        });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// exports.login = async (req, res) => {
//     try {
//         const user = await authService.login(req.body);

//         const token = generateToken({
//             id: user.id,
//             email: user.email,
//             role_id: user.role_id
//         });

//         res.json({ user, token });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

exports.getAllUsers = async(req,res)=>{
    try{
        const user = await authService.getAllUsers();
        res.json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.createPermission = async(req,res)=>{
    try{
        const permission = await authService.createPermission(req.body);
        res.json(permission);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.createRolePermission=async(req,res)=>{
    try{
        const rolePermission=await authService.createRolePermission(req.body);
        res.json(rolePermission);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.createRole = async (req,res)=>{
    try{
        const role = await authService.createRole(req.body); // ✅ fixed
        res.json(role);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

