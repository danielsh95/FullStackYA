const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/testDB')
        .then(() => console.log("Connected to testDB'"))
        .catch(error => console.log(error));
}

module.exports = connectDB;