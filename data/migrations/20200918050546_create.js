exports.up = async function (knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('username', 128).notNull().unique();
    tbl.string('password', 128).notNull();
    tbl.string('email', 128).notNull();
    tbl.string('fullName', 128);
    tbl.string('address', 128);
    tbl.string('city', 50);
    tbl.string('state', 50);
    tbl.boolean('owner').defaultTo(true);
  });

  await knex.schema.createTable('items', tbl => {
    tbl.increments('id');
    tbl.string('itemName').notNull();
    tbl.decimal('price', 13, 2).notNull();
    tbl.text('description').notNull();
    tbl.string('rentalTerm', 128).notNull();
    tbl.boolean('available').defaultTo(true);
    tbl.string('imageUrl');
    tbl
      .integer('owner_id')
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });

  await knex.schema.createTable('renter_items', tbl => {
    tbl
      .integer('renter_id')
      .notNull()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('item_id')
      .notNull()
      .references('id')
      .inTable('items')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.primary(['renter_id', 'item_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('renter_items');
  await knex.schema.dropTableIfExists('items');
  await knex.schema.dropTableIfExists('users');
};
