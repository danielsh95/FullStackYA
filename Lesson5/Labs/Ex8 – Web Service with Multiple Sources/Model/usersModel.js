const mongoose = require('mongoose');

// 'Schema' maps to a MongoDB collection and defines the shape of the documents within that collection
// 'Schema' is the blueprint of the documents

const usersSchema = new mongoose.Schema(
    {
        externalId: Number,
        city: String,
        country: String
    },
    { versionKey: false }
);

const Users = mongoose.model('user',usersSchema, "users");

module.exports = Users