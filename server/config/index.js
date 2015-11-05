'use strict'

let feathers = require('feathers')
let bodyParser = require('body-parser')

module.exports = function(app){
    app.configure(feathers.rest())
      //.configure(feathers.socketio())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({extended: true}))
      .use('/', feathers.static(__dirname + '/public'))

    return app
}
