'use strict'

let UserModel = {
    schema: {
        email: {type: String, required: true},
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
