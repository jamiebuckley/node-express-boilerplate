const UsersController = require('api/v1/usersController')

/**
 * Not a very helpful test, just here for setup
 */
test('getUsers', () => {
    const usersService = {};
    usersService.getUsers = jest.fn().mockReturnValue([{ name: 'bob' }])

    const usersController = new UsersController()

    const res = mockRes()
    usersController.getUsers(mockReq(), res)
    expect(res.json).toHaveBeenCalledWith([{ name: 'bob' }])
});