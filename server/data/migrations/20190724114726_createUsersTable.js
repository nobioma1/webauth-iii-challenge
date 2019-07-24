exports.up = knex => knex.schema.createTable('users', (table) => {
  table
    .increments();
  table
    .string('username', 128)
    .unique()
    .notNullable();
  table
    .string('password')
    .notNullable();
  table
    .string('department')
    .notNullable();
});

exports.down = knex => knex.schema.dropTableIfExists('users');
