# mvcnode
Projeto MVC Node JS


# Iniciando Pacotes Basicos
npm i 
npm i nodemon
npm i express
npm i express-handlebars
npm i msql2
npm i sequelize

## Apos fazer a configuração do banco de dados
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '852456', {
    host:'localhost',
    dialect:'mysql',
    
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado  localhost:3000')
} catch (err) {
    console.log('Não foi possivel  se conectar ao Banco de dados ')
}

exports.default = sequelize

## Configuração basica do projeto index.js

const express = require('express');
const exphbs = require('express-handlebars')

const app = express()

const conn =require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true}))


app.use(express.json())

app.use(express.static('public'))



app.listen(3000)