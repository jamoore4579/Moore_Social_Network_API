const router = require('express').Router();

const {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    getAllusers,
    removeFriend
} = require('../../controllers/user-controller');

//api routes for GET all and POST at /api/users
router
    .route('/')
    .get()
    .post()

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

// /api/users
router
    .route('/')
    .get(getAllusers)
    .post(createUser)

module.exports = router;