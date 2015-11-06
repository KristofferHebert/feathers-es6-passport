'use strict'

const ROOT = process.env.PWD
const SECRET = require(ROOT + '/config/locals')
let feathers = require('feathers')
let hooks = require('feathers-hooks')
let feathersPassportJwt = require('feathers-passport-jwt');
let bodyParser = require('body-parser')


module.exports = function(app){
    app.configure(feathers.rest())
      //.configure(feathers.socketio())
      .configure(hooks())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({extended: true}))
      .configure(feathersPassportJwt({
          secret: SECRET
      }))
      .use('/', feathers.static(ROOT + '/public'))

    return app
}
