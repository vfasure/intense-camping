const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
 console.error('😵  DATABASE_URL is required 😵');
 process.exit(0);
}

const Knex = require('knex');
const URL = require('url');
const pg_server = URL.parse(DATABASE_URL, true);
const knex = Knex({
  client: 'pg',
  pool: { min: 0, max: 7 },
  connection: {
    host: pg_server.hostname,
    port: pg_server.port,
    ssl: pg_server.query.ssl,
    database: pg_server.pathname.substring(1),
    user: pg_server.auth.split(':')[0],
    password: pg_server.auth.split(':')[1]
  }
});

exports.queryTrips = function queryTrips() {
  return knex('trips').select().then((trips) => { return { trips } });
};
exports.createReservation = function createReservation({ trip_id, name, email }) {
  return knex('reservations').insert({ trip_id, name, email });
}
