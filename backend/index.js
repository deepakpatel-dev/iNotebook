const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello Deepak tryinng to learn momgo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})