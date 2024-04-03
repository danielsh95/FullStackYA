const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        "FullName": String,
        "NumOfActions": Number
    },
    {
        versionKey: false
    });

    
const userModel = mongoose.model('user', userSchema, 'users');

module.exports = userModel