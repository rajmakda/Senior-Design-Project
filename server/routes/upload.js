var express = require("express");
var router = express.Router();
var middleware = require("../middleware/index");
var multer = require("multer");
var xlsx = require("xlsx");
var GIAEmployee = require("../models/GIA");

var upload = multer({dest: "server/uploads/"});

router.post("/gia", upload.single("file"), function(req, res, next) {
    console.log(req.file);
    const file = req.file;
    const workbook = xlsx.readFile("server/uploads/"+file.filename);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var data = xlsx.utils.sheet_to_json(worksheet);
    data.map(function(item) {
        var availability = {}
        item["Monday"] != undefined ? availability.mon = item["Monday"].split(";") : availability.mon = []
        item["Tuesday"] != undefined ? availability.tue = item["Tuesday"].split(";") : availability.tue = []
        item["Wednesday"] != undefined ? availability.wed = item["Wednesday"].split(";") : availability.wed = []
        item["Thursday"] != undefined ? availability.thu = item["Thursday"].split(";") : availability.thu = []
        item["Friday"] != undefined ? availability.fri = item["Friday"].split(";") : availability.fri = []
        item["Saturday"] != undefined ? availability.sat = item["Saturday"].split(";") : availability.sat = []
        item["Sunday"] != undefined ? availability.sun = item["Sunday"].split(";") : availability.sun = []
        var employee = {
            email: item["What is your e-mail address? "],
            availability: availability
        }
        
    });

    res.status(200).send("ok");
});

module.exports = router;