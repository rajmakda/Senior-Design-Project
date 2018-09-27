var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
// Requiring configuration file
var config = require("./config.js");

// Requiring routes
var indexRoute = require("./server/routes/index");
var authRoute = require("./server/routes/auth");
var timesheetRoutes = require("./server/routes/Timesheet");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const API_PORT = process.env.API_PORT || 3001;
//Serving production build of React using Express
app.use(express.static(__dirname + "/client/build"));

// Mongoose connection
const dburl = process.env.DBURL || `mongodb+srv://${config.dbconfig.username}:${config.dbconfig.password}@cluster0-ymruv.mongodb.net/ihouseapp`;
// const dburl = 'mongodb://localhost:27017/ihouseapp'
mongoose.connect(dburl, { useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error')).catch(err => {
    console.log(err);
})

// Route for GIA Timesheets
app.use("/api/timesheet",timesheetRoutes);
// Route for Authentication
app.use("/api/auth", authRoute);
// Dummy index route for API
app.use("/api", indexRoute);

// Route to send unmatched routes to React
app.use("*", function(req,res) {
    res.sendFile(__dirname + "/client/build/index.html");
})
// Error handler
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).json({ "err": err.message });
})

app.listen(API_PORT, function() {
    console.log(`Listening on PORT ${API_PORT}`);
})