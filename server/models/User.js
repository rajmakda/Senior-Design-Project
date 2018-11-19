var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    sjsuid: { type: Number, index: true, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true} ,
    password: { type: String, required: true} ,
    typeofuser: {
        type: String,
        enum: ['admin','RA','gia','resident']
    }
});

module.exports = mongoose.model("User", UserSchema);