const logger = require('../../logging')

class UsersController  {

    /**
     * Return a list of users
     * @param {Object} req The request
     * @param {Object} res The response
     */
    getUsers(req, res) {
        logger.debug("getUsers")
        res.json([{ id: 1, name: "bob" }])
    }

    getUser(req, res) {
        logger.debug(`getUser(${req.params.id})`)
        res.json([{ id: 1, name: "bob" }])
    }
}

module.exports = UsersController
