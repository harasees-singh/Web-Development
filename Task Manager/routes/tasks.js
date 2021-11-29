const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const {getAllTasks, createTask, deleteTask, updateTask, getTask} = require(`../controllers/tasks`)

router.route('/').get(getAllTasks).post(createTask)
router.route('./:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router