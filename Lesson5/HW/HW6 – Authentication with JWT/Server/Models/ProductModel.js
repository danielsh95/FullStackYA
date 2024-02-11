const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        "name": String,
        "price": Number
    },
    {
        versionKey: false
    });


const userModel = mongoose.model('product', productSchema, 'products');

module.exports = userModel