const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const error = require('./middleware/error');
const colors = require('colors');

const renterAuth = require('./middleware/renterAuth');
const ownerAuth = require('./middleware/ownerAuth');
const itemRouter = require('./items/item-router');
const authRouter = require('./auth/auth-router.js');
const renterRouter = require('./renters/renter-router');
const ownerRouter = require('./owners/owner-router');

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
server.use('/api/items', itemRouter);
server.use('/api/auth', authRouter);
server.use('/api/renter', renterAuth, renterRouter);
server.use('/api/owner', ownerAuth, ownerRouter);

server.use(error);

module.exports = server;
