const { createConnection } = require('typeorm')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes.ts')

const app = express()

db.one('SELECT * from value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)