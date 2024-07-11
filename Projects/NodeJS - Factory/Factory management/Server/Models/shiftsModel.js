const mongoose = require('mongoose')

const shiftSchema = mongoose.Schema(
    {
        "date": String,
        "startingHour": Number,
        "endingHour": Number
    },
    {
        versionKey: false
    });

    
const shiftModel = mongoose.model('shift', shiftSchema, 'shifts');

module.exports = shiftModel