// Node JS Server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

// Creating the APP
const app = express();

app.use(express.json())

// Use CORS
app.use(cors())


// Server Port from ENV
const port = process.env.PORT || 3000

// API end Points - REQUEST & RESPONSE
app.get('/', (req, res) => {
  res.send('Welcome to the NodeJS Local Server')
})

app.get('/youtube', (req, res) => {
  // res.send('Hello Youtube Lover, this is from Youtube API')
  res.json(
    {message: 'Hello Youtube Lover, this is from Youtube API'}
  )
})

app.listen(port, () => {
  if (process.env.PORT == 3200) {
    console.log(`Server has been started at ENV's ${port}`)
  } else {
    console.log(`Server has been started at ${port}`)
  }
})
