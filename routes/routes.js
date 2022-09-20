const express = require('express')
const home = require('../controllers/home')
const jurusan = require('../controllers/jurusan')
const viewRegister = require('../controllers/register')
const insertUser = require('../controllers/users')
const viewLogin = require('../controllers/login')

const router = express.Router()

// halaman beranda
router.get('/', home)
router.get('/jurusan/:jurusan/:gambar', jurusan)
// halaman registrasi
router.get('/register', viewRegister)
router.post('/register', insertUser)
// halaman login
router.get('/login', viewLogin)

module.exports = router