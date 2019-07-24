const express = require('express');
const { register, login } = require('../controllers/auth');
const { validateUserInput, validateUser } = require('../middlewares');

const authRouter = express.Router();

authRouter.post('/register', validateUserInput, register);
authRouter.post('/login', validateUser, login);

module.exports = authRouter;
