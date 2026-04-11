const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../utils/jwt');

exports.register = async (data)=>{
    const hashedPassword = await bcrypt.hash(data.password,10);
    const user =await User.create({
        name:data.name,
        email:data.email,
        password:hashedPassword
    });
    return user;
};

exports.login=async (data)=>{
const user = await User.findOne({where:{email:data.email}});
if(!user) throw new Error('User not found');

const isMatch = await bcrypt.compare(data.password,user.password);
if(!isMatch) throw new Error('Invalid credentials');

const token = generateToken(user);
return {user,token};
};