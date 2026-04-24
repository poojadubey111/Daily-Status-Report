const jwt = require("jsonwebtoken");

const bcrypt =require("bcrypt");
const {User} = require("../models");

const{
    generateAccessToken,
    generateRefreshToken
}=require("../utils/jwt");



exports.refreshToken = async (refreshToken) => {
    if (!refreshToken) {
        throw new Error("Refresh token required");
    }

    let decoded;
    try {
        decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
        throw new Error("Invalid refresh token");
    }

    const user = await User.findByPk(decoded.id);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.refreshToken !== refreshToken) {
        throw new Error("Refresh token mismatch");
    }

    const accessToken = generateAccessToken(user);

    // // rotate refresh token
    // const newRefreshToken = generateRefreshToken(user);
    // user.refreshToken = newRefreshToken;
    // await user.save();

    return {
        accessToken,
        refreshToken          //: newRefreshToken
    };
};




exports.registerUser = async(data)=>{
    return await User.create(data);
}

exports.loginUser = async (email, password) => {

    if (!email || !password) {
        throw new Error("Email and password required");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
};


exports.logoutUser = async (refreshToken) => {
    if (!refreshToken) {
        throw new Error("Refresh token required");
    }

    const user = await User.findOne({ where: { refreshToken } });

    if (!user) {
        throw new Error("Invalid refresh token");
    }

    user.refreshToken = null;
    await user.save();

    return { message: "Logged out successfully" };
};