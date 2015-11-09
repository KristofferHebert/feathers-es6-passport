'use strict'

let UserModel = require('../model/user')
let feathersPassportJwt = require('feathers-passport-jwt')
let requireAuth = feathersPassportJwt.hooks.requireAuth
let hashPassword = feathersPassportJwt.hooks.hashPassword
let lowercaseEmail = feathersPassportJwt.hooks.lowercaseEmail


let LOCALS = require('../../config/locals')

module.exports = function(app, path){

        app.use(path, UserModel())
        .use(function(err, req, res, next) {
            res.status(500)
            res.json({
                message: err.message
            })
        })

    	let UserService = app.service(path)

        UserService.before({
    		all: requireAuth,
    		create: [hashPassword, lowercaseEmail]
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
}
