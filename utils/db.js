// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/smkn-bersama');

const Sequelize = require('sequelize')

const db = new Sequelize('smkn_bersama', 'root', '91322', {
    dialect: 'mysql'
})

db.sync({})

module.exports = db