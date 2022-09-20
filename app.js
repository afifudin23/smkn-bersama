const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
require('./utils/db')
const db = require('./utils/db')
const router = require('./routes/routes')

// setup express
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static('public'))
// untuk development saja nanti hapus saat deploy
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))



// jalankan database
try {
    db.authenticate().then(() => console.log('berhasil terkoneksi dengan database'))
} catch (error) {
    console.error(error)
}
 
app.use(router)

// exclusive for programming
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
