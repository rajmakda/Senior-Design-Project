var express = require("express");
var router = express.Router();
var middleware = require("../middleware/index");
var Event = require("../models/Event");
var multer = require("multer");
var fs = require('fs');
var p = require('path');

var upload = multer({ dest: "server/uploads/eventImages/" });


router.post("/", middleware.verifyToken, middleware.checkRAorAdmin, upload.single("img"), function(req, res, next) {
    let event = JSON.parse(req.body.event);
    let img = req.file;
    event.imgPath = img.path;
    Event.create(event, function(err, event) {
        if (err) return next(err);
        return res.json(event);
    });
});

router.get("/", function(req, res) {
    let expired = [];
    let current = [];
    Event.find({expired: 'false'}, function(err, events) {
        if (err) return next(err);
        events.forEach(function(event) {
            console.log(event.when);
            if (new Date()+1 > new Date(event.when)) {
                event.expired = true;
                expired.push(event);
            } else {
                current.push(event);
            }
        });
        expired.forEach(function (event) {
            Event.findByIdAndUpdate(event._id, { expired: true }, function (err, event) {
                if (err) console.log(err)
                console.log(event)
            });
        });
        return res.send(current);
    });
});

router.get("/image/:name", function(req, res, next) {
    let name = req.params.name;
    let path = "server/uploads/eventImages/" + name
    if (fs.existsSync(path)) {
        res.sendFile(p.resolve(path) ,function(err) {
            if (err) next(err)
            else console.log("Sent")
        })
    } else {
        return next(new Error("No such file found"))
    }
});

router.delete("/:id", middleware.verifyToken ,middleware.checkRAorAdmin, function(req, res) {
    let id = req.params.id;
    Event.findByIdAndDelete(id, function(err) {
        if (err) return next(err);
        return res.send("Successfully Deleted")
    })
});

router.get("/:id", middleware.verifyToken ,middleware.checkRAorAdmin, function(req, res) {
    let id = req.params.id;
    Event.findById(id, function(err, e) {
        if (err) return next(err);
        return res.send(e)
    })
});

router.put("/:id", middleware.verifyToken, middleware.checkRAorAdmin, upload.single("img") ,function(req, res) {
    let id = req.params.id;
    let event = JSON.parse(req.body.event);
    let img = req.file;
    event.imgPath = img.path;
    Event.findByIdAndUpdate(id,event,function(err, eve) {
        if (err) return next(err);
        return res.send(eve);
    });
});



module.exports = router;