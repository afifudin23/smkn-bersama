const express = require('express')
const home = require('../controllers/home')
const jurusan = require('../controllers/jurusan')
const viewRegister = require('../controllers/register')
const insertUser = require('../controllers/users')

const router = express.Router()

router.get('/', home)
router.get('/jurusan/:jurusan/:gambar', jurusan)
router.get('/register', viewRegister)
router.post('/register', insertUser)

module.exports = router