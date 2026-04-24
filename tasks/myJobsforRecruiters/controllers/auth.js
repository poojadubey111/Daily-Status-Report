const authService = require("../services/auth");

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.createRecruiter = async (req, res) => {
    try {
        const recruiter = await authService.createRecruiter(req.body);
        res.status(201).json(recruiter);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.logout = async(req,res) =>{
    try{
        res.status(200).json({
            message:"Logged out successfully"
        });
    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};