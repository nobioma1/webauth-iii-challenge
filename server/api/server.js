const express = require('express');
const cors = require('cors');

const appRouter = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', appRouter);

server.get('/', (req, res) => {
  res.status(200).send('Welcome, Users-Department with JWT');
});

module.exports = server;
