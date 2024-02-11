const mongoose = require('mongoose')

const shiftSchema = mongoose.Schema(
    {
        "date": mongoose.SchemaTypes.Date,
        "startingHour": Number,
        "endingHour": Number
    },
    {
        versionKey: false
    });

    
const shiftModel = mongoose.model('shift', shiftSchema, 'shifts');

module.exports = shiftModel