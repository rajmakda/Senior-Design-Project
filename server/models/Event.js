var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    when: Date,
    where: String,
    owner: String,
    description: String,
    title: String,
    expired: {
        type: Boolean,
        default: false
    },
    imgPath: String
});

module.exports = mongoose.model("Event", EventSchema);