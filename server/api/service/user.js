'use strict'
const ROOT = process.env.PWD
let feathersPassportJwt = require('feathers-passport-jwt')
let db = require(ROOT + '/server/config/db')


let UserModel = {
    schema: {
      email: {type: String, required: true, unique: true },
      password: {type: String, required: true },
      admin: {type: Boolean, default: false }
    },
    before:{
      create: [feathersPassportJwt.hooks.hashPassword('password')]
    }
  }

module.exports = function(){
    return new db('user', UserModel)
}
