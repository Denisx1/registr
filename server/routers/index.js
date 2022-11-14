const Router = require('express').Router
const userController = require('../controllers/userController')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activated/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', userController.getUser)

module.exports = router