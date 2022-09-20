const user = require('../model/user')

const viewUser = async (req, res) => {
    try {
        const { email } = req.body
        const userValid = await user.findOne({
            where: {
                email: email
            }
        })
        if(userValid) {
            res.render('user', { 
                    layout: 'layouts/main-layout',
                    title: email,
                })
        } else {
            res.render('login', { 
                layout: 'layouts/main-layout',
                title: 'Login',
            })
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = viewUser