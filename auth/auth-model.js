const db = require('../data/dbConfig');

function findById(id) {
  return db('users').where({ id }).first();
}

function findUser(username) {
  return db('users')
    .select('id', 'username', 'password', 'owner')
    .where(username)
    .first();
}

function add(newUser) {
  return db('users')
    .insert(newUser)
    .then(id => findById(id[0]));
}

module.exports = { findUser, add };
