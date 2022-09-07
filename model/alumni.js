const mongoose = require('mongoose');

const Alumni1 = mongoose.model('Alumni1', { 
    name: {
        type: String,
        required: true,
    },
    opini: {
            type: String,
            required: true,
        },
    image: {
        type: String,
        required: true,
    },
});

const Alumni2 = mongoose.model('Alumni2', { 
    name: {
        type: String,
        required: true,
    },
    opini: {
            type: String,
            required: true,
        },
    image: {
            type: String,
            required: true,
        },
});

const Alumni3 = mongoose.model('Alumni3', { 
    name: {
        type: String,
        required: true,
    },
    opini: {
            type: String,
            required: true,
        },
    image: {
            type: String,
            required: true,
        },
});

module.exports = { Alumni1, Alumni2, Alumni3, }