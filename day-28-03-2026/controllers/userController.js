//Get all users
exports.getUsers = (req,res)=>{
    res.send('Get all users (controller)');
};

//Get user by ID
exports.getUserById = (req,res)=>{
    const id = req.params.id;
    res.send(`Get user ${id}`);
};

//Create user
exports.createUser =(req,res) =>{
    const { name } = req.body;
    res.send(`User ${name} created`);
};
