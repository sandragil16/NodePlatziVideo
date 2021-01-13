require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',   /** cuando no esté en prodccion */
  port: process.env.PORT || 3000
}

module.exports = {config}