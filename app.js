const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
require('./utils/db')
// // database mongdb
// const { Alumni1, Alumni2, Alumni3, } = require('./model/alumni')
// // database mysql
const db = require('./utils/db')
const { Alumni1, Alumni2, Alumni3, } = require('./model/alumni')

// setup express
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))

// jalankan database
db.authenticate().then(() => console.log('berhasil terkoneksi dengan database'))


app.get('/', async (req, res) => {
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

// // mencoba menambahkan data ke dalam table untuk debugging saja
// app.post('/crud', async (req, res) => {
//     try {
//         const { name, opini, image } = req.body

//         const newAlumni3 = new Alumni3({ 
//             name, opini, image 
//         })
        
//         await newAlumni3.save()

//         res.json(newAlumni3)
//     } catch (error) {
//         console.error(error.message)
//         res.status(500).send('Server error')
//     }
// })

app.use((req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })