
const initOptions = {
    /* Database connection options */
  };
const pgp = require('pg-promise')(initOptions);
const db = pgp('postgres://username:password@localhost:5432/your_database_name');

module.exports = db;