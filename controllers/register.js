const viewRegister = async (req, res) => {
    try {
    res.render('register', { 
            layout: 'layouts/main-layout',
            title: 'Register',
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = viewRegister