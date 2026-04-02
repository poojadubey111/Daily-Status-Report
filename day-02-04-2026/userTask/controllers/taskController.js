const { Task } =require('../models');

//Create Task
exports.createTask = async(req,res)=>{
    try{
        const{user_id,assigned_to ,task} = req.body;
        if(!user_id || !assigned_to || !task){
            return res.status(400).json({message:"All fields required"});
        }

        const newTask = await Task.create({
            user_id,
            assigned_to,
            task
        });
        res.status(201).json({success:true,data:newTask});
    }
    catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { user_id, assigned_to, task } = req.body;

    const taskData = await Task.findByPk(id);

    if (!taskData) {
      return res.status(404).json({ message: "Task not found" });
    }

    await taskData.update({
      user_id,
      assigned_to,
      task
    });

    res.json({ success: true, data: taskData });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();

    res.json({ success: true, message: "Task deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};