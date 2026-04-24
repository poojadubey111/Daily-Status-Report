const authService = require("../services/auth.service");

exports.register = async(req,res)=>{
    try{
        const user = await authService.registerUser(req.body);
        res.json({success:true,data:user});
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.login = async(req,res)=>{
    try{
        const { email,password} = req.body;

        const data = await authService.loginUser(email,password);

        if (!data) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        res.json({
            success:true,
            accessToken:data.accessToken,
            refreshToken:data.refreshToken
        });
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        const data = await authService.logoutUser(refreshToken);

        res.json({
            success: true,
            message: data.message
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.refresh = async(req,res)=>{
    try{
        const { refreshToken } = req.body;

        const data = await authService.refreshToken(refreshToken);

        res.json(data);
    }catch(err){
        res.status(403).json({error:err.message});
    }
};