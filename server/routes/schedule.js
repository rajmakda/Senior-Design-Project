var express = require('express');
var router = express.Router();
var middleware = require('../middleware/index');
var GIAEmployee = require("../models/GIA");
var Schedule = require("../models/schedule");

router.get("/availability", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    GIAEmployee.find({availability: {$exists: 'true'}}, function(err, docs) {
        if (err) return next(err);
        return res.json({availableUser: docs});
    });
});

router.post("/", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    let data = {
        semester: req.body.semester,
        schedule: req.body.schedule
    };
    Schedule.create(data,function(err, schedule) {
        if (err) return next(err);
        return res.json(schedule);
    });
});
module.exports = router;