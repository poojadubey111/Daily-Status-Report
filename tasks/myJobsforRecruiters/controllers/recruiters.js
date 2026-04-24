const recruiterService = require('../services/recruiter');
exports.getApplicantsForRecruiter = async(req,res)=>{
    try{
        const user = req.user;

        const data = await recruiterService.getApplicantsForRecruiter(user);
        res.status(200).json({
            message:"Applicants fetched successfully",
            data
        });
    }catch(error){
        res.status(400).json({
            message:error.message,
        });
    }
};

