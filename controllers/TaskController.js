//criamo o TaskController.js


//definindo o  caminho do model
const Task = require('../models/Task')

//exportamos ele para ser usado fora
module.exports = class TaskController{

    //
    static createTask(req, res) {
        res.render('tasks/create')
    }

}