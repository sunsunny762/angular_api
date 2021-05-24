const { createPool } = require("mysql");

const pool = createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
})

pool.query('select * from products', (err, result, fields)=>{
    if (err) {
        return console.log(err);
    }
    return console.log(result);
});

module.exports = pool;