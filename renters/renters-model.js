const db = require('../data/dbConfig');

// Find item by user id
function findById(id) {
  return db('users').where({ id }).first();
}

// See if item is available
function isItemAvailable(id) {
  return db('items').where({ id }).first();
}

// Add rented item to list, make item unavailable
function addRentedItem(userId, itemId) {
  return db('renter_items')
    .insert({ renter_id: userId, item_id: itemId })
    .then(function () {
      return db('items').where({ id: itemId }).update({ available: false });
    });
}

// get list of rented items for renter
function getRentedItems(renter_id) {
  return db('renter_items as ri')
    .join('users as u', 'u.id', 'ri.renter_id')
    .join('items as i', 'i.id', 'ri.item_id')
    .where('u.id', renter_id)
    .select('i.*');
}

module.exports = { findById, addRentedItem, getRentedItems, isItemAvailable };
