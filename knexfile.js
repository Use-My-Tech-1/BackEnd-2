module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/use_tech.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './data/seeds' }
  },
  testing: {
    client: 'sqlite3',
    connection: { filename: './data/testdb.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
