require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',   /** cuando no esté en prodccion */
  port: process.env.PORT || 3000,
  CORS:process.env.CORS,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PASSWORD,
  dbhost:process.env.DB_HOST,
  dbName:process.env.DB_NAME
}




module.exports = {config}