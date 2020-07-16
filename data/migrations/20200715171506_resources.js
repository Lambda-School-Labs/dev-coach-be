exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments();
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('link')
    table.string('thumbnail')
    table.timestamp('runDate')
    table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
