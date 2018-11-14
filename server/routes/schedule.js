var express = require('express');
var router = express.Router();
var middleware = require('../middleware/index');
var GIAEmployee = require("../models/GIA");

router.get("/availability", middleware.verifyToken, middleware.checkAdmin, function(req, res) {
    GIAEmployee.find({availability: {$exists: 'true'}}, function(err, docs) {
        if (err) return next(err);
        return res.json({availableUser: docs});
    });
});
module.exports = router;