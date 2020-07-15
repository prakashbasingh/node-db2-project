// Update with your config settings.

//below here we are configuring a connection to the database

module.exports = {
//configuration for development database
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true, // this is only needed for SQLite
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
