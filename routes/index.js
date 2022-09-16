const express = require('express')
const home = require('../controllers/home')
const jurusan = require('../controllers/jurusan')

const router = express.Router()

router.get('/', home)

router.get('/jurusan/:jurusan/:gambar', jurusan)

module.exports = router