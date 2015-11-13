'use strict'

module.exports  = function(app){
    require('./services/user')(app, '/api/users')
    require('./services/login')(app, '/api/login')

	return app
}
