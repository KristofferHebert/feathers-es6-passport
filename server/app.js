'use strict'
// Require modules
let feathers = require('feathers')

// Instantiate server
let app = feathers()

// Set Default Port
const PORT = process.env.PORT || 3001

// Configure Server
require('./config')(app)

// Configure API
require('../server/api/routes')(app)

// Launch Server
app.info('Server listening on', PORT)

app.listen(PORT)
