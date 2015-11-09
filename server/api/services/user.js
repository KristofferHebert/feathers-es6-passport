'use strict'

let UserModel = require('../model/user')

let hashPassword = require('feathers-passport-jwt').hooks.hashPassword
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
    		all: function(hook, next) {
    			if (!hook.params.user) {
    				return next(new Error('You are not logged in'));
    			}
    			next();
    		},
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
}
