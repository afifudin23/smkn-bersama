const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
require('./utils/db')
const { Alumni1, Alumni2, Alumni3, } = require('./model/alumni')

// setup express
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))
app.use(morgan('dev'))


app.get('/', async (req, res) => {
    const alumnis1 = await Alumni1.find()
    const alumnis2 = await Alumni2.find()
    const alumnis3 = await Alumni3.find()

    res.render('index', { 
        layout: 'layouts/main-layout',
        title: 'SMKN BERSAMA',
        alumnis1,
        alumnis2,
        alumnis3,
    })
})

app.get('/jurusan/:jurusan/:gambar', (req, res) => {
    res.render('jurusan', { 
        layout: 'layouts/main-layout',
        title: 'Jurusan',
        titleJurusan: req.params.jurusan,
        gambar: req.params.gambar
    })
})

app.get('/yudistira', (req, res) => {
    res.send('Hallo Yudistira!')
})

app.use((req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })