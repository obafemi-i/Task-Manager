const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name field cannot be empty'],
        trim:true,
        maxlength:[20, 'Not more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', taskSchema)