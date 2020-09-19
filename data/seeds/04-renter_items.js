exports.seed = async function (knex) {
  await knex('renter_items').insert([
    {
      renter_id: 1,
      item_id: 1
    },
    {
      renter_id: 3,
      item_id: 4
    }
  ]);
};
