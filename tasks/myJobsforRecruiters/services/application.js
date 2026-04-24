const { Application, Jobs, User,Role } = require("../models");


//------------------start Apply Job --------------------- 

exports.applyJob = async ({ job_id, user }) => {
if(!job_id){
    throw new Error("JobId is required");
}


const role = await Role.findByPk(user.role_id);

if(!role){
    throw new Error("Role not found");
}

  // Only candidate can apply
  if(role.name.toLowerCase() !== "candidate"){
    throw new Error("Only Candidates can apply for job");
  }

    //first i check for job exists
    const job = await Jobs.findByPk(job_id);

    if (!job) {
        throw new Error("Job not found");
    }

const candidate_id = user.id;

    //then check for job is already applied?

    const existing = await Application.findOne({
        where: { candidate_id, job_id }
    });

    if (existing) {
        throw new Error("Already applied to this job");
    }

    //then finally create apllication 
    const application = await Application.create({

        job_id,
        candidate_id: user.id,
    });
    return true;
};

//------------------End Apply job---------------------------

//------------------Get Applied Jobs------------------------

exports.getAppliedJobs = async (candidate_id) => {
    const applications = await Application.findAll({
        where: { candidate_id },

        include: [
            {
                model: Jobs,
                attributes: ["id", "title", "description", "recruiter_id"]
            }
        ],
        order: [["applied_at", "DESC"]]
    });
    return applications;
}
//------------------End Applied jobs------------------------