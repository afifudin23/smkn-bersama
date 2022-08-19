const express = require('express')
var expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('index', { 
        layout: 'layouts/main-layout',
        title: 'SMKN BERSAMA' 
    })
})
app.get('/daftar', (req, res) => {
    res.send('Hello Yudistira!')
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })