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
<<<<<<< HEAD
    }]
=======
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
>>>>>>> 1cae637fdbb37fa39e177c95781f68810634cde8
}); 

module.exports = mongoose.model("GIAEmployee", GIASchema);