var express = require("express");
var router = express.Router();
var middleware = require("../middleware/index");
var User = require("../models/User");

router.get("/", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    User.find({}, {password: 0}, function(err, users) {
        if (err) return next(err);
        return res.send(users);
    });
});

router.put("/:id", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    let id = req.params.id;
    let updatedUser = req.body.user;
    User.findByIdAndUpdate(id,updatedUser,function(err, user) {
        if (err) next(err);
        return res.send(user);
    });
});

router.delete("/:id", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    let id = req.params.id;
    User.findByIdAndDelete(id,function(err) {
        if (err) return next(err);
        return res.send("Successfully deleted");
    });
});

module.exports = router;