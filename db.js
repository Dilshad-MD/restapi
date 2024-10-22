const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Students",
    password:"Dil@1234",
    port:5432,
});


module.exports = pool;