const mongoose = require ('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,//
        require: true
    },//

    description: {
        type: String,//
        require: true
    },//

    author: {
        type: String,//
        require: true
    }

},
 {
    timestamps: true
 }
)




//Create a folder in DB with the name 'todos' and store data with the schema
const model = mongoose.model('todos', todoSchema)
module.exports = model;





