const { where } = require("sequelize");
const { Jobs } = require("../models");



exports.createJob = async (data,recruiterId) =>{
   const job = await Jobs.create({
      title:data.title,
      description:data.description,
      recruiter_id:recruiterId,
      status:"ACTIVE",
      application_limit: data.application_limit || 10
   });
   return job;
}

exports.getJobsForCandidates =async ()=>{
   const jobs= await Jobs.findAll({
      where:{
         status:"ACTIVE"
      },
      order:[
         ["createdAt","DESC"]
      ],
      attributes:{
         exclude:["updatedAt"]
      }
   });
   return jobs;
}









//-------------End create Job---------------------

//--------start get job--------------------
exports.getAllJobs = async()=>{
   return await Jobs.findAll();
}
//--------------end-----------------------


//-------------start delete job------------
exports.deleteJobById = async (id,user) => {
  if (!id) {
    throw new Error("Job ID is required");
  }

  const job = await Jobs.findByPk(id); 

  if (!job) {
    throw new Error("Job not found");
  }

 if (user.role !== "Admin") {
   
    if (job.recruiter_id !== user.id) {
      throw new Error("You are not allowed to delete this job");
    }
  }
  
  await job.destroy();

  return true;
};