const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5430,
  database: 'f3solodb'
})

module.exports = pool;
