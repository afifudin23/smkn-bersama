const { Alumni1, Alumni2, Alumni3, } = require('../model/alumni')



const home = async (req, res) => {
    try {
        const alumnis1 = await Alumni1.findAll()
        const alumnis2 = await Alumni2.findAll()
        const alumnis3 = await Alumni3.findAll()
    
        res.render('index', { 
            layout: 'layouts/main-layout',
            title: 'SMKN BERSAMA',
            alumnis1,
            alumnis2,
            alumnis3,
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = home