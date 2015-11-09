'use strict'

let db = require('feathers-mongoose')
// let db = require('feathers-memory')
// let db = require('feathers-postgresql')

let LOCALS = require('./locals')

let dbName = (process.env.NODE_ENV === "production") ? LOCALS.productionDB : LOCALS.stagingDB

console.log('Using DB ', dbName)

module.exports = {
    "db" : db,
    "dbName" : dbName
}
