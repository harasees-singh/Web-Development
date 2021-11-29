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
const getTask = (res, req) =>{
    res.json({id:req.params.id})
}
const updateTask = (res, req) =>{
    res.send('update task')
}
const deleteTask = (res, req) =>{
    res.send('delete task')
}


module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask,
} 