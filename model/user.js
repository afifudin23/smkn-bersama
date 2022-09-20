const sequelize = require('sequelize')
const db = require('../utils/db')

const User = db.define(
    'user',
    {
        email: { type: sequelize.STRING },
        password: { type: sequelize.STRING },
    }
);

module.exports = User