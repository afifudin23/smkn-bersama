const sequelize = require('sequelize')
const db = require('../utils/db')

const Alumni1 = db.define(
    'alumni1',
    {
        name: { type: sequelize.STRING },
        opini: { type: sequelize.STRING },
        image: { type: sequelize.STRING },

    }
);

const Alumni2 = db.define(
    'alumni2',
    {
        name: { type: sequelize.STRING },
        opini: { type: sequelize.STRING },
        image: { type: sequelize.STRING },

    }
);

const Alumni3 = db.define(
    'alumni3',
    {
        name: { type: sequelize.STRING },
        opini: { type: sequelize.STRING },
        image: { type: sequelize.STRING },

    }
);

module.exports = {
    Alumni1,
    Alumni2,
    Alumni3,
}