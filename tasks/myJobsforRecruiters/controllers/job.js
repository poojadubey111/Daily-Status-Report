const jobService = require("../services/job");

//---------------start create job--------------------------
exports.createJobController = async (req,res) =>{
    try{

           console.log("BODY:", req.body);
        console.log("LIMIT:", req.body.application_limit);
        const job = await jobService.createJob(req.body,req.user.id);

        res.status(201).json({
            message:"Jobcreated successfully",
            data:job
        });

    }catch(err){
        res.status(400).json({
             message:err.message  
        })
       
    }
}
// ----------------End create job-----------------


exports.getJobs =async(req,res)=>{
    try{
        const jobs = await jobService.getJobsForCandidates();

        res.status(200).json({
            message:"Jobs fetched successfully",
            data:jobs
        });

    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};