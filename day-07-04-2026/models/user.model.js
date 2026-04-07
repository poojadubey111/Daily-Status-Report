module.exports = (sequelize,DataTypes)=>{
    return sequelize.define("User",{
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        password:{
            type:DataTypes.STRING
        },
       role: {
  type: DataTypes.STRING,
  defaultValue: "user"
}
    });
};