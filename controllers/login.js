const viewLogin = async (req, res) => {
    try {
    res.render('login', { 
            layout: 'layouts/main-layout',
            title: 'Login',
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = viewLogin