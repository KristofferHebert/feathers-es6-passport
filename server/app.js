'use strict'

let feathers = require('feathers')
let app = feathers()

// Set Default
const PORT = process.env.PORT || 3001

// Configure Server
require('./config')(app)

// Configure API
require('../server/api/routes')(app)

app.info('Server listening on', PORT)

app.listen(PORT)
