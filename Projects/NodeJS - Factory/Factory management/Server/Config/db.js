const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/N_JS_Final_Project')
        .then(() => console.log("Connected to DB: N_JS_Final_Project'"))
        .catch(error => console.log(error));
}

module.exports = connectDB;