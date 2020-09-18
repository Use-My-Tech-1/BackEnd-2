const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const error = require('./middleware/error');
const colors = require('colors');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes
server.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the UseMyTech API'
  });
});

server.use(error);

module.exports = server;
