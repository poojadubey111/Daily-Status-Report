module.exports = (sequelize,DataTypes) =>{ 
   const Jobs = sequelize.define("Jobs",{
       id:{
            type:DataTypes.INTEGER,
            pimaryKey:true, 
            autoIncrement: true            
          },
       title:{
              type:DataTypes.STRING,
              allowNull:false,
            },
       dscription:{
              type:DataTypes.STRING,
              allowNull:false,
            },
       recruiter_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                       model: "Users",  
                       key: "id",
      },
},
});
   return Jobs;
}