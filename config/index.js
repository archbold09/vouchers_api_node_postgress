require('dotenv').config();
const config = {
  port: process.env.PORT,
  clientApiKey: process.env.CLIENT_API_KEY,
};

module.exports = { config };
