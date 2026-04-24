const {User,Role} = require("../models");
const bcrypt = require('bcrypt');

//------------Get user----------
exports.getUsersByRole = async(roleName) =>{
    return await User.findAll({
        include:[
            {
                model:Role,
                where:{name:roleName},
                attributes:["id","name"]
            }
        ]
    });
};
// ---------end-------------
//-----------------start deleteUser-------------
exports.deleteUser = async (id)=>{

     

  if (typeof id === "object") {
    id = id.id;
  }

      const user = await User.findByPk(id, {
        include: [{ model: Role }]
    });
    if(!user){
        throw new Error("User not found");
    }
  if (user.Role && user.Role.name === "Admin") {
        throw new Error("Cannot delete admin");
    }
    await user.destroy();
    return true;
}
//--------------------------------------------------------------


//forgot password
exports.forgotPassword = async ({email})=>{
    const user = await User.findOne({ where: { email } });

    if(!user){
        throw new Error("User not found ");
    }

    const resetToken = Math.random().toString(36).slice(2);

    user.resetToken=resetToken;
    user.resetTokenExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await user.save();

    return resetToken;

}
//end


exports.resetPassword = async (token,newPassword)=>{
   const user = await User.findOne({ where: { resetToken: token } });

    if(!user){
        throw new Error("Invalid token");
    }

      if (user.resetTokenExpiry < new Date()) {
         user.resetToken = null;
  user.resetTokenExpiry = null;
  await user.save();
    throw new Error("Token expired");
  }

    const hashed =await bcrypt.hash(newPassword,10);

    user.password = hashed;
    user.resetToken = null;
  user.resetTokenExpiry = null
    await user.save();
    return true;
}
