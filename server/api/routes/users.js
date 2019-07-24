const express = require('express');
const { getUsers } = require('../controllers/users');
const { checkAuthToken } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/', checkAuthToken, getUsers);

module.exports = userRouter;
