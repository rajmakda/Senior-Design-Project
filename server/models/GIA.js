var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GIASchema = new Schema({
    sjsuid: {type: Number, index: true, required: true},
    email: String,
    timesheets: [{
        timeperiod: {
            from: Date,
            to: Date
        },
        worklog: [{
            date: Date,
            job: String,
            time: String,
            hours: String
        }]
    }]
}); 

module.exports = mongoose.model("GIAEmployee", GIASchema);