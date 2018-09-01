var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


// Requiring routes
var indexRoute = require("./server/routes/index");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
const API_PORT = process.env.API_PORT || 3001;
//Serving production build of React using Express
app.use(express.static(__dirname + "/client/build"));

// Dummy index route for API
app.use("/api", indexRoute);

// Route to send unmatched routes to React
app.use("*", function(req,res) {
    res.sendFile(__dirname + "/client/build/index.html");
})

app.listen(API_PORT, function() {
    console.log(`Listening on PORT ${API_PORT}`);
})