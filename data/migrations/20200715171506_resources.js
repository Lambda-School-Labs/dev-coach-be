exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.incremenets();
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('link')
    table.string('thumbnail')
    table.string('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.string('user_first_name')
        .notNullable()
        .references('first_name')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.string('user_last_name')
        .notNullable()
        .references('last_name')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.string('user_avatar')
        .references('avatar_url')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
