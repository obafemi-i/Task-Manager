const task = require('../models/model')
const asyncWraper = require('../middleware/async')


const getAllTasks = asyncWraper (async (req,res)=>{
        const Task = await task.find({})
        res.status(200).res.json({Task})
})

const createTask = asyncWraper (async (req,res)=>{
    const Task = await task.create(req.body)
    res.status(201).res.json(Task)
})

const getTask = asyncWraper (async (req,res)=>{
        const {id:taskID} = req.params
        const Task = await task.findOne({_id:taskID})
        if(!Task){
            return res.status(404).json({msg:`There's no task with id ${taskID}`})
        }
        res.status(200).json({Task})
})

const updateTask = asyncWraper (async (req,res)=>{
    const {id:taskID} = req.params
    const Task = await task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators:true
    })
    if(!Task){
        return res.status(404).json({msg:`There's no task with id ${taskID}`})
    }
    res.status(200).json({Task})
})

const deleteTask =  asyncWraper(async (req,res)=>{
        const {id:taskID} = req.params
        const Task = await task.findOneAndDelete({_id:taskID})
        if(!Task){
            res.status(404).json({msg:`There's no task with id ${taskID}`})
        }
        res.status(200).json({Task})
})
module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}