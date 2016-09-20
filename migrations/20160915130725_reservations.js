exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservations', function(t) {
    t.increments('id');
    t.integer('trip_id').references('id').inTable('trips');
    t.string('name', 2048);
    t.string('email', 2048);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reservations');
};
