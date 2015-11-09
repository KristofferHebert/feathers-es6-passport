'use strict'
const ROOT = process.env.PWD
let Connection = require(ROOT + '/server/config/db')
let LOCALS = require(ROOT + '/server/config/locals')

let UserModel = {
	schema: {
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		admin: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		isAdmin: function() {
			return this.admin;
		}
	}
}

let options = {
	db: Connection.dbName
}

let UserService = new Connection.db('user', UserModel, options)

module.exports = function(){ return UserService }
