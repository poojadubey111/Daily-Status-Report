const { where } = require('sequelize');
const {Application,Jobs,User} = require('../models');


exports.getApplicantsForRecruiter = async(user)=>{
    if(user.role !== "Recruiter"){
        throw new Error("Only Recruiter can view Applicants");
    }

    const applications= await Application.findAll({
        include:[
            {
                model:Jobs,
                where:{
                    created_by:user.id
                },
                attributes:["id","title"]
            },
            {
                model:User,
                as:"candidate",
                attributes:["id","name",email]
            },
        ],
        order:[["ceatedAt","DESC"]],
    });

    return applications;
}