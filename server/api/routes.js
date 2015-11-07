'use strict'

let UserService = require('./service/user')
let hashPassword = require('feathers-passport-jwt').hooks.hashPassword

module.exports = function(app){
    app.use('/api/users', UserService())
    let userService = app.service('/api/users')
    userService.before({
          create: hashPassword
    })

    // userService.create({
    // 	email: 'hey@hey.com',
    // 	password: 'sdfkjhdskjhsfkjhdfskh'
    // }, {}, function(error, user) {
    // 	console.log('Created default user', user);
    // });

    return app
}
