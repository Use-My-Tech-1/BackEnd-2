exports.up = async function (knex) {
  await knex.schema.createTable('owners', tbl => {
    tbl.increments('id');
    tbl.string('fullName', 128).notNull().unique();
    tbl.string('address', 128);
    tbl.string('city', 50);
    tbl.string('state', 50);
    tbl.string('email', 128);
    tbl.boolean('owner').defaultTo(true);
  });

  await knex.schema.createTable('renters', tbl => {
    tbl.increments('id');
    tbl.string('fullName', 128).notNull().unique();
    tbl.string('address', 128).notNull();
    tbl.string('city', 50).notNull();
    tbl.string('state', 50).notNull();
    tbl.string('email', 128).notNull();
    tbl.boolean('owner').defaultTo(false);
  });

  await knex.schema.createTable('items', tbl => {
    tbl.increments('id');
    tbl.string('itemName').notNull();
    tbl.decimal('price', 19, 4).notNull();
    tbl.text('description').notNull();
    tbl.string('rentalTerm', 128).notNull();
    tbl.boolean('available').defaultTo(true);
    tbl.string('imageUrl');
  });

  await knex.schema.createTable('owner_items', tbl => {
    tbl
      .integer('owner_id')
      .notNull()
      .references('id')
      .inTable('owners')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('item_id')
      .notNull()
      .references('id')
      .inTable('items')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.primary(['owner_id', 'item_id']);
  });

  await knex.schema.createTable('renter_items', tbl => {
    tbl
      .integer('renter_id')
      .notNull()
      .references('id')
      .inTable('renters')
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
  await knex.schema.dropTableIfExists('owner_items');
  await knex.schema.dropTableIfExists('items');
  await knex.schema.dropTableIfExists('renters');
  await knex.schema.dropTableIfExists('owners');
};
