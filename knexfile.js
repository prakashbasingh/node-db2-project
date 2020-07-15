// Update with your config settings.

//below here we are configuring a connection to the database

module.exports = {
//configuration for development database
  development: {
    client: "sqlite3", //database driver
    connection: {
      filename: "./data/car-dealer.db3" //from the root folder and also changed the path to current
    },
    useNullAsDefault: true, // this is only needed for SQLite
    migration: {
      directory: "./migrations"//migration for each changes during table construction imported
    }
  },




  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

//configuration for development database
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user:     "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
