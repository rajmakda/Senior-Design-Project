var express = require("express");
var router = express.Router();
var middleware = require('../middleware/index');

router.get("/", middleware.verifyToken ,function(req, res) {
    res.send('hello world');
});

module.exports = router;