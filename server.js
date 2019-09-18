// all other imports below here
// import 'dotenv/config';

require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const path = require('path')

const port = process.env.PORT || 8000

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname, "client", "build")))


// Defining the routes to use
app.use('/api', routes.data)

// sends index.html back to the main file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => 
    console.log(`App listening on port ${port}`)
)