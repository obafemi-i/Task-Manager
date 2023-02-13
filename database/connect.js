const mongoose = require('mongoose')


const connectDB = (url)=>{
    return mongoose.connect(process.env.mongo_uri,{
        useFindAndModify:false,
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}


module.exports = connectDB

