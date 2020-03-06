const logger = require('../../logging')
const UsersService = require('../../services/usersService')

class UsersController {

    constructor(usersService = UsersService) {
        this.usersService = usersService
    }

    /**
     * Returns a list of users
     * @param {Object} req Express request object
     * @param {Object} res Express response object
     */
    getUsers(req, res) {
        logger.debug("getUsers")
        res.json(this.usersService.getUsers())
    }

    getUser(req, res) {
        logger.debug(`getUser(${req.params.id})`)
        res.json([{ id: 1, name: "bob" }])
    }
}

module.exports = UsersController
