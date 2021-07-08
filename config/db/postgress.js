require('dotenv').config();
const { Pool } = require('pg');

const configDB = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
};

const connectDB = new Pool(configDB);

module.exports = { connectDB };
