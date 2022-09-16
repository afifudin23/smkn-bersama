const jurusan = (req, res) => {
    try {
        res.render('jurusan', { 
            layout: 'layouts/main-layout',
            title: 'Jurusan',
            titleJurusan: req.params.jurusan,
            gambar: req.params.gambar
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = jurusan