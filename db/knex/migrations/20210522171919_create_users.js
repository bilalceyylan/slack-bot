
exports.up = function(knex) {

    return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary();
        t.string('username').notNull(); 
        t.decimal('point', 6, 2).notNull();
        t.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
