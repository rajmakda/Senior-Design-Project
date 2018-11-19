var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GIASchema = new Schema({
    sjsuid: {type: Number, index: true, required: true, unique: true},
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
    }],
    availability: {
        mon: [String],
        tue: [String],
        wed: [String],
        thu: [String],
        fri: [String],
        sat: [String],
        sun: [String]
    }
}); 

module.exports = mongoose.model("GIAEmployee", GIASchema);