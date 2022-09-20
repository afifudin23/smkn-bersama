const viewUser = async (req, res) => {
    try {
        const { email } = req.body
        res.render('user', { 
                layout: 'layouts/main-layout',
                title: email,
            })
    } catch (error) {
        console.error(error)
    }
}

module.exports = viewUser