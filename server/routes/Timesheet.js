var express = require("express");
var router = express.Router();
var GIAEmployee = require("../models/GIA");

// Route to add a new timesheet for a GIA given sjsu id
router.post("/:id",function(req, res, next) {
    let timeperiod = req.body.timeperiod;
    timeperiod.from = new Date(req.body.timeperiod.from);
    timeperiod.to = new Date(req.body.timeperiod.to);
    // let timeperiodFrom = new Date(req.body.timeperiod.from);
    // let timeperiodTo = new Date(req.body.timeperiod.to);
    // timeperiod.from = (timeperiodFrom.getMonth() + 1) + '/' + timeperiodFrom.getDate() + '/' + timeperiodFrom.getFullYear();
    // timeperiod.to = (timeperiodTo.getMonth() + 1) + '/' + timeperiodTo.getDate() + '/' + timeperiodTo.getFullYear();
    let worklog = req.body.worklog;
    let timesheet = {
        "timeperiod":timeperiod,
        "worklog":worklog
    }
    GIAEmployee.updateOne({ sjsuid: req.params.id }, { "$push": {timesheets:timesheet}}, {upsert: true}, function(err, response) {
        if (err) return next(err)
        return res.json({"ok":"Mongo update successful"});
    })
});

// Route to get timesheets for all GIAs for a given time period
router.get("/:from/:to", function(req, res, next) {
    let from = new Date(req.params.from);
    let to = new Date(req.params.to);
    let timesheets = [];
    GIAEmployee.aggregate([
        {$unwind: "$timesheets"},
        {$match: {
            $and: [{
                "timesheets.timeperiod.from": {
                    $eq: from
                }
            },
            {
                "timesheets.timeperiod.to": {
                    $eq: to
                }
            }]
        }}
    ], function(err, result) {
        if (err) return next(err);
        return res.json(result);
    })

});

module.exports = router;