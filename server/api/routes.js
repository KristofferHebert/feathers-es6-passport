'use strict'

let UserService = require('./model/user')
let hashPassword = require('feathers-passport-jwt').hooks.hashPassword
let LOCALS = require('../config/locals')

module.exports = function(app){
    app.use('/api/users', UserService())

    let userService = app.service('/api/users')
    userService.before({
          create: hashPassword
    })
    // Create Power User
    // userService.create({
    // 	email: LOCALS.adminEmail,
    // 	password: LOCALS.adminPassword,
    // 	admin : true,
    // }, {}, function(error, user) {
    //  if(error) console.log(error)
    // 	console.log('Created Power User', user);
    // });

    return app
}
