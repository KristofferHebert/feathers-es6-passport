'use strict'

let feathers = require('feathers')
let app = feathers()

let db = require('feathers-mongoose')

let UserModel = {
    schema: {
        title: {type: String, required: true},
        description: {type: String},
        dueDate: {type: Date, 'default': Date.now},
        complete: {type: Boolean, 'default': false, index: true}
    },
    methods: {
        isComplete: function(){
            return this.complete
        }
    },
    statics: {
    },
    virtuals: {
    },
    indexes: [
        {'dueDate': -1, background: true}
    ]
}

// Configure Server
require('./config')(app)

app.use('/api/users', new db('user', UserModel))


// Launch server
console.log('Server listening on PORT 3000')
app.listen(3000)

// export default app
