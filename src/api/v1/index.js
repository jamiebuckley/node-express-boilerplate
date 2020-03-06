const express = require('express')
const router = express.Router()
const UsersController = require('./usersController')

const usersController = new UsersController()

router.get('/users', usersController.getUsers.bind(usersController))
router.get('/users/:id', usersController.getUser.bind(usersController))

module.exports = router