const Pool = require("pg").Pool;
require("dotenv").config();

// const pool=new Pool({
//     user:process.env.USERNAME,
//     password:process.env.PASSWORD,
//     host:process.env.HOST,
//     port:process.env.DBPORT,
//     database:'homework'

//     // connectionString: process.env.POSTGRES_URL + "?sslmode=require",

// })
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});
pool.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected correctly");
  }
});

module.exports = pool;
