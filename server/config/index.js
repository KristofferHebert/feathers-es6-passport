'use strict'

const ROOT = process.env.PWD
const LOCALS = require(ROOT + '/server/config/locals')
let feathers = require('feathers')
let hooks = require('feathers-hooks')
let feathersAuth = require('feathers-auth')
let bodyParser = require('body-parser')
let winston = require('winston')
let logger = require('feathers-logger')

// configure winston
let winstonLogger = new(winston.Logger)({
	transports: [
		new(winston.transports.Console)({
			colorize: true
		}),
		new(winston.transports.File)({
			name: 'error-file',
			filename: 'filelog-error.log',
			level: 'error'
		})
	]
})

module.exports = function(app) {
	app.configure(feathers.rest())
		//.configure(feathers.socketio())
		.configure(hooks())
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({
			extended: true
		}))
		.configure(feathersAuth({
			secret: LOCALS.secret
		}))
		.use('/', feathers.static(ROOT + '/public'))
	    .configure(logger(winstonLogger))

	return app
}
