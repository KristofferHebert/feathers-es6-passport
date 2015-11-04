'use strict'

let feathers = require('feathers')
let db = require('feathers-mongodb')
let bodyParser = require('body-parser')
let app = feathers()

let todoService = db({
  db: 'feathers-demo',
  collection: 'todos'
})


// Configure Server
app.configure(feathers.rest())
  .configure(feathers.socketio())
  .use(bodyParser.json())
  .use('/todos', todoService)
  .use('/', feathers.static(__dirname + '/public'))


// Launch server
console.log('Server listening on PORT 3000');
app.listen(3000)

// export default app
