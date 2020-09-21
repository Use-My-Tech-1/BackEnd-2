const db = require('../data/dbConfig');

function find() {
  return db('items');
}

function findById(id) {
  return db('items').where({ id }).first();
}

module.exports = { find, findById };
