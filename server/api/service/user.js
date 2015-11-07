'use strict'
const ROOT = process.env.PWD
let model = require(ROOT + '/server/config/db')
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

}


let User = new model('user', UserModel, options);


//Create Power User
// User.create({
// 	email: LOCALS.adminEmail,
// 	password: LOCALS.adminPassword
// }, {}, function(error, user) {
// 	console.log('Created default user', user);
// });

module.exports = function() {
	return User
}
