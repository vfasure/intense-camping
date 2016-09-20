// necessary to satisfy `knex migrate:make ___`

const URL = require('url');
const pg_server = URL.parse(process.env.DATABASE_URL, true);

module.exports =
  {
    client: 'pg',
    pool: { min: 5, max: 15, maxRequests: Infinity, requestTimeout: 10*1000, idleTimeout: 900000, syncInterval: 900000 },
    connection: {
      host: pg_server.hostname,
      port: pg_server.port,
      ssl: pg_server.query.ssl,
      database: pg_server.pathname.substring(1),
      user: pg_server.auth.split(':')[0],
      password: pg_server.auth.split(':')[1]
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
;

module.exports.development = module.exports.staging = module.exports.production = module.exports;
