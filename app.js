const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
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