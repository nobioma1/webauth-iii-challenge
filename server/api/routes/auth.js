const express = require('express');
const { register } = require('../controllers/auth');
const { validateUserInput } = require('../middlewares');

const authRouter = express.Router();

authRouter.post('/register', validateUserInput, register);

module.exports = authRouter;
