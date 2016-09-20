exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(t) {
    t.increments('id');
    t.string('title');
    t.string('pretty_date');
    t.string('thumbnail_url', 2048);
    t.boolean('can_register');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};
