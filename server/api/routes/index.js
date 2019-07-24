const express = require('express');
const authRouter = require('./auth');
const userRouter = require('./users');

const appRouter = express.Router();

appRouter.use('/', authRouter);
appRouter.use('/users', userRouter);

module.exports = appRouter;
