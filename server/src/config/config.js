module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'merchantportal',
    user: process.env.DB_USER || 'merchantportal',
    password: process.env.DB_PASS || 'merchantportal',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './merchantportal.sqlite'
    }
  }
}
