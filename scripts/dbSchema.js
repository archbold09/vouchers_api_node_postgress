const { Pool } = require('pg');
require('dotenv').config();

//importar funciones
const { createDB } = require('./functions');

//Config inicial schema
const configDB = {
  host: process.env.DB_HOST,
  user: 'postgres',
  password: 'postgres',
};

const dbSchema = {
  nameDB: process.env.DB,
  userDB: process.env.DB_USER,
  passDB: process.env.DB_PASS,
};

const connectDB = new Pool(configDB);

/* Replegar Schema */

createDB(connectDB, dbSchema, configDB)
  .then((res) => {
    console.log('[DB SCHEMA CREADO CORRECTAMENTE]');
    process.exit(0);
  })
  .catch((error) => console.log(error.message));
