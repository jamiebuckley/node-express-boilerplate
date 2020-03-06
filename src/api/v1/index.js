const express = require('express')
const router = express.Router()
const UsersController = require('./usersController')

const usersController = new UsersController()

router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)

module.exports = router