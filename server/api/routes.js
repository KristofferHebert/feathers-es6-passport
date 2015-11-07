'use strict'

let UserService = require('./service/user')
let hashPassword = require('feathers-passport-jwt').hooks.hashPassword

module.exports = function(app){
    app.service('/api/users', UserService())
    return app
}
