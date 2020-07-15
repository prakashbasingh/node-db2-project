
//this function describe the changes we want to make 
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      //always should create primary key that auto-increments
      tbl.increments();

      //add a string(varchar) column up to 128 character long
      // and should not allow duplicate value and is required (not NULL)
      tbl.string("vin", 128).unique().notNullable();
      tbl.string("make", 128).notNullable();
      tbl.string("model", 128).notNullable();
      tbl.string("mileage", 128).notNullable();
      tbl.string("transmission", 128);
      tbl.string("title", 128);

      tbl.timestamps(true, true);

  })
};



//this function describes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
