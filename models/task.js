const mongoose = require('mongoose');


//define the shape of task document
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:[ 4, 'must be equal or more than 4 '],
        maxlength: [255, 'can not be more than 255']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

//exporting the module to use it in controller..
module.exports = mongoose.model('Task', taskSchema);