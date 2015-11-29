'use strict'

let UserModel = require('../model/user')
let feathersAuth = require('feathers-authentication').default
let authHooks = require('feathers-authentication').hooks
let LOCALS = require('../../config/locals')

module.exports = function(app, path){

        app.use(path, UserModel())
        .use('/user/:id', function (req, res, next) {
            console.log('Request', req);
            next();
        })
        // .use(function(err, req, res, next) {
        //     res.status(500)
        //     res.json({
        //         message: err.message
        //     })
        // })

    	let UserService = app.service(path)

        // UserService.before({
    	// 	create: [authHooks.hashPassword, authHooks.lowercaseEmail]
    	// })

    	// Create Power User
    	UserService.create({
    		email: LOCALS.adminEmail,
    		password: LOCALS.adminPassword,
    		admin : true,
    	}, {}, function(error, user) {
    	 if(error) console.log(error)
    		console.log('Created Power User', user);
    	});
}
