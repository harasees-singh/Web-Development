const Task = require('../models/Task')
const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:err})
    }
    // res.send('all items from the site')
}

const createTask = async (res, req) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
    
}
const getTask = async (res, req) =>{
    // res.json({id:req.params.id})
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id': ${taskID}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}
const updateTask = (res, req) =>{
    res.send('update task')
}
const deleteTask = async (res, req) =>{
    // res.send('delete task')
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id': ${taskID}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}


module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask,
} 