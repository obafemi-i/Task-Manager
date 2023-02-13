const express = require('express')

const routes = express.Router()

const {getAllTasks} = require('../controller/control')
const {getTask} = require('../controller/control')
const {createTask} = require('../controller/control')
const {updateTask} = require('../controller/control')
const {deleteTask} = require('../controller/control')


routes.route('/api/v1/tasks').get(getAllTasks).post(createTask)
routes.route('/api/v1/tasks/:id').delete(deleteTask).patch(updateTask).get(getTask)

// routes.route('/api/v1/tasks').get(getAllTasks).post(createTask)


module.exports = routes