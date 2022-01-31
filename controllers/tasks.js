const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

// get all tasks
const getAllTasks  = asyncWrapper( async (req, res, next) => {
    const tasks = await Task.find({}).exec()
    res.status(200).json({tasks})
  
});

//creating a new task
const creatTask = asyncWrapper( async (req, res, next) => {
    const task = await Task.create({name: req.body.name});
    res.status(201).json({ task });    
})

//get a single task
const getTask  = asyncWrapper( async (req, res, next) => {
    const task = await Task.findOne({_id: req.params.id});
    if(!task) {
        return res.status(404).json('There is no Task with the given ID...');
    } 
    res.status(200).json({task});
})

//update a task
const updateTask = asyncWrapper( async (req, res, next) => {
    const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
    if(!task) {
        return res.status(404).json('There is no Task with the given ID...')
    }
    res.status(200).json({task});
})

//delete a task
const deleteTasks = asyncWrapper( async (req, res, next) => {
    const task = await Task.findOneAndDelete({_id: req.params.id});
    if(!task) {
        return res.status(404).json('There is no Task with the given ID...');
    }
    res.status(200).json({task});
})

module.exports = {
    getAllTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTasks
}