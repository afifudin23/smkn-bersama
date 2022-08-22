const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.render('index', { 
        layout: 'layouts/main-layout',
        title: 'SMKN BERSAMA' 
    })
})

app.get('/jurusan/:jurusan', (req, res) => {
    res.render('jurusan', { 
        layout: 'layouts/main-layout',
        title: 'Jurusan',
        titleJurusan: req.params.jurusan 
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