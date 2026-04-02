const { User,Task} =require('../models');

//Create User 
exports.createUser = async(req,res) =>{
    try{
        const {name,email} = req.body;

        if(!name || !email){
            return res.status(400).json({message:"All feilds required"});
                }
                const user =await User.create({name,email});
                res.status(201).json({success:true,data:user})
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Get assigned tasks
exports.getAssignedTasks = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findByPk(id,{
            include:{
                model:Task,
                as:'createdTasks',
                attributes:['task']
            }
        });
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Get tasks assigned To user
exports.getUserTasks = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findByPk(id,{
            include:{
                model:Task,
                as:'assignedTasks',
                attributes:['task']
            }
        });
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}
exports.getAllUser = async(req,res)=>{
    try{
        // const id = req.params.id;
        const user = await User.findAll();
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

// Update User
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({ name, email });

    res.json({ success: true, data: user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.json({ success: true, message: "User deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};