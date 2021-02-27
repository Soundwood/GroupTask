const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);