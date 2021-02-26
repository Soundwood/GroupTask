const { boolean } = require('joi');
const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    active: {
        type: Boolean,
        required: true, 
        default: true
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('List', ListSchema);