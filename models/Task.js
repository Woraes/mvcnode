const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    done:{
        type: DataTypes.BOOLEAN,
        required: true,
    },
})

module.exports = Task