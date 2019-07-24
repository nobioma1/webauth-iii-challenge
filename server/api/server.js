const express = require('express');
const cors = require('cors');

const { authRouter } = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', authRouter);

server.get('/', (req, res) => {
  res.status(200).send('Welcome, Users-Department with JWT');
});

module.exports = server;
