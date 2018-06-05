// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///coffee-shop'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
