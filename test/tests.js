'use strict'
let request = require('supertest')
const PORT = process.env.PORT || 3001
let server =  request('http://localhost:' + PORT)

describe('Testing Auth with API', function(){
	it('responds to /api/user request', function(done){
		server
			.get('/api/users')
			.expect(500, done)
	})
	it('404 everything else', function(done){
		server
			.get('/foo/bar')
			.expect(404, done)
	})
})