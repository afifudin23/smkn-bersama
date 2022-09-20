const Users = require('../model/user')



const insertUser = async (req, res) => {
    try { 
        const { email, password } = req.body

        const newUser = new Users({ 
            email, password, 
        })
        
        await newUser.save()
    
        res.render('register', { 
            layout: 'layouts/main-layout',
            title: 'Register',
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = insertUser