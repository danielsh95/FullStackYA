const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        "id": Number,
        "name": String,
        "color": String,
        "price": Number,
    },
    {
        versionKey: false
    });


const userModel = mongoose.model('product', productSchema, 'products');

module.exports = userModel