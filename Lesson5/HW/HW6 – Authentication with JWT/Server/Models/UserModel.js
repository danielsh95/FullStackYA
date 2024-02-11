const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        "userName": String,
        "password": String
    },
    {
        versionKey: false
    });

    
const userModel = mongoose.model('user', userSchema, 'users');

module.exports = userModel