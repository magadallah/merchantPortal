const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')
const { sequelize } = require('./models')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.disable('x-powered-by')

require('./routes')(app)

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started at port ${config.port}`)
  })
