exports.seed = async function (knex) {
  await knex('renter_items').insert([
    {
      renter_id: 4,
      item_id: 1
    },
    {
      renter_id: 6,
      item_id: 4
    }
  ]);
};
