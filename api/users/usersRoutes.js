const express = require('express');
const router = express.Router();
const { currentUser, loginUser, registerUser } = require('./usersController');

router.route('/register').get(registerUser);
router.route('/login').post(loginUser)
router.route('/current').post(currentUser)

module.exports = router;
