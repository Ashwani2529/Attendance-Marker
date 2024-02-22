const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    uniqueID: {
        type: String,
        required: true,
        unique: true
    },
    designation: {
        type: String,
        // required: true
    },
    authority: {
        type: String,
        // required: true
    },
    region:{
        type: String,
        // required: true
    },
    attendance: {
        type: String,
        default: "absent"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;