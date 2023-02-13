const express =require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const notFound = require('./middleware/not-found')
const erorHandler = require('.//middleware/error-handler')

const connectDB = require('./database/connect')

const tasks = require('./routes/tasks')
const app = express()

dotenv.config({path:'config.env'})
const port = process.env.port || 8080

// middleware
app.use(express.static('./public'))
app.use(morgan('tiny'))
app.use(express.json())

app.use(notFound)
app.use(erorHandler)

// app.get('/', (req,res)=>{
//     res.send('Task manager app')
// })

app.use('/', tasks)

const start = async ()=>{
    try {
        await connectDB()
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
