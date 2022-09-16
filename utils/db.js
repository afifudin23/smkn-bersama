const Sequelize = require('sequelize')

const db = new Sequelize('smkn_bersama', 'root', '91322', {
    dialect: 'mysql'
})


module.exports = db