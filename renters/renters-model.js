const db = require('../data/dbConfig');

function findById(id) {
  return db('users').where({ id }).first();
}

function add(newRenter) {
  return db('users')
    .insert(newRenter)
    .then(id => findById(id[0]));
}

// return list of rented items for renter
function getRentedItems(renter_id) {
  return db('renter_items as ri')
    .join('users as u', 'u.id', 'ri.renter_id')
    .join('items as i', 'i.id', 'ri.item_id')
    .where('u.id', renter_id)
    .select('i.*');
}

module.exports = { findById, add, getRentedItems };
