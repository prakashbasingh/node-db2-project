
exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.decimal("price").defaultTo(0).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.dropColumn("cars");
  })
};
