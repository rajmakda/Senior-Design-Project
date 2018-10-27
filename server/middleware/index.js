var jwt = require('jsonwebtoken');
var config = require('../../config');
var User = require('../models/User');
var middleware = {};

middleware.verifyToken = function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: "No token provided" });
    }
    jwt.verify(token, config.secretkey, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: "Failed to authenticate token" });

        // if everything is good
        req.userId = decoded.id;
        next();
    });
}

middleware.checkAdmin = function(req, res, next) {
    var userId = req.userId;
    User.findById(userId, {password : 0}, function(err, user) {
        if (err) return res.status(500).send({message:"There was a problem finding the user"});
        if (!user) return res.status(404).send({message:"No such user found"});
        if (user.typeofuser !== "admin") return res.status(401).send({message: "You are not authorized to access this"});
        next();
    })
}

module.exports = middleware;