const applicationService = require("../services/application");


//----------------Start Apply Job here-----------
exports.applyJob = async (req, res) => {
    try {
        const user = req.user;
        const job_id = req.body.job_id;

        const application = await applicationService.applyJob({
            job_id,
            user
        });
        res.status(200).json({
            message: "Job applied successfully",
            data: application
        });
    } catch (error) {
        res.status(400).json({
      message: error.message
        });
        }
}

//---------------------End Apply job------------------------

//---------------------Start Get Applied Jobs--------------


exports.getAppliedJobs = async (req, res) => {
    try {
        const candidate_id = req.user.id;
        const applications = await applicationService.getAppliedJobs(candidate_id);

        res.status(200).json({
            message: "Applied jobs fetched succesfully",
            data: applications
        });
    } catch (error) {
        res.status(400).json({
      message: error.message
        });
    }
};
//---------------------End Applied job---------------------