var express = require('express');
var router = express.Router();
var middleware = require('../middleware/index');
var GIAEmployee = require("../models/GIA");

router.get("/availability", middleware.checkAdmin, function(req, res) {
    
});
module.exports = router;