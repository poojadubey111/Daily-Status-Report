const userService = require("../services/user");
const jobService=require("../services/job");
const { deleteUser } = require("../services/user");
const { deleteJobById } = require("../services/job");

exports.getAllCandidates = async (req,res,next)=>{
    try{
        const candidates = await userService.getUsersByRole("Candidate");
        res.json({
            message:"Candidates fetched successfully",
            data:candidates
        });
    }catch(error){
        next(error);
    }
};


exports.getAllRecruiters =async (req,res,next)=>{
    try{
        const recruiters = await userService.getUsersByRole("Recruiter");

        res.json({
            message:"Recruiters fetched successfully",
            data:recruiters
        });
    }catch(error){
        next(error);
    }
};


exports.getAllJobs = async(req,res,next)=>{
    try{
        const jobs = await jobService.getAllJobs();
        res.json({
            message:"job fetched successfully",
            data:jobs
        });
    }catch(error){
        next(error);
    }
};
//------end--------------
//-------------start delete User------------





exports.deleteUser = async (req, res) => {
    try {
        console.log("Controller hit");

        const result = await deleteUser(req.params.id);

        return res.status(200).json({
            message: "User deleted successfully",
            data: result
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
//------end--------------
//-------------start delete job------------
exports.deleteJob = async(req,res,next)=>{
    try{

           const user = req.user;
          const id = req.params.id; 

    await deleteJobById(id,user);

        res.json({
            message:"Job deleted successfully"
        });
    }catch(error){
        next(error);
    }
};
//--------------------------------------------