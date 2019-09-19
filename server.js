// all other imports below here
// import 'dotenv/config';

require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const path = require('path')
const timeout = require('connect-timeout')

const port = process.env.PORT || 8000

const app = express()

app.use(timeout('30s'))
app.use(bodyParser.json())
app.use(haltOnTimedout)
app.use(express.urlencoded({ extended: true}))
app.use(haltOnTimedout)
app.use(cors())
app.use(haltOnTimedout)
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(haltOnTimedout)


// Defining the routes to use
app.use('/api', routes.data)

// sends index.html back to the main file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

function haltOnTimedout (req, res, next) {
    if (!req.timedout) next()
}

app.listen(port, () => 
    console.log(`App listening on port ${port}`)
)