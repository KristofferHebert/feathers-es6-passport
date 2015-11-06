'use strict'

let feathers = require('feathers')
let app = feathers()

let db = require('feathers-mongoose')



// Set Default
const PORT = process.env.PORT || 3001

// Configure Server
require('./config')(app)

// Configure API
app.use('/api/users', new db('user', UserModel))


// Launch server
console.log('Server listening on', PORT)
app.listen(PORT)

// export default app
