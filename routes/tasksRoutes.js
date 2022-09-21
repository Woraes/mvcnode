const express = require('express')
const router = express.Router()


const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/update/:id', TaskController.updateTask)
router.post('/update', TaskController.updateTaskSave)
router.post('/updatestatus', TaskController.updateStatus)
//aqui eu chamo o caminho do navegador /tasks"/" esse caminho que entra no codigo para chamar a rota
router.get('/all', TaskController.showTasks)
router.get('/', TaskController.home)

module.exports = router

