'use strict'

let UserService = require('./service/user')



module.exports = function(app){
    app.use('/api/users', UserService())
    return app
}
