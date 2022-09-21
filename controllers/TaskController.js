//criamo o TaskController.js


//definindo o  caminho do model
const { raw } = require('express')
const Task = require('../models/Task')

//exportamos ele para ser usado fora
module.exports = class TaskController{

    //
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res){
        const task = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            done: false,
        }

        await Task.create(task)

        res.redirect('/tasks/all')
    }
    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})
        //renderiza o all.handlebars html
        res.render('tasks/all', {tasks}) //chamo o html
    }

    static async removeTask(req, res) {

        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks/all')

    }

    static async updateTask(req, res) {
        const id = req.params.id

        const task = await Task.findOne({where: {id: id}, raw: true})

        res.render('tasks/update', {task})
    }

    static async updateTaskSave(req, res) {
        const id = req.body.id

        const task = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
        }
        await Task.update(task, {where: {id: id}})

        res.redirect('/tasks/all')
    }

    static async updateStatus(req, res) {
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false,

        }
        await Task.update(task, {where: {id: id}})

        res.redirect('/tasks/all')
    }



    static home(req, res) {
        res.render('./home') //chamo o html
    }

}