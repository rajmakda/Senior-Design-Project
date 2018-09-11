var express = require("express");
var router = express.Router();
var User = require("../models/User");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require("../../config");

router.post("/login", function(req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secretkey, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});

router.post("/register", function(req, res, next) {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        sjsuid : req.body.sjsuid,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : hashedPassword,
        typeofuser : req.body.typeofuser
    }, function(err, user) {
        if (err) return res.status(500).send("There was a problem registering the user");

        var token = jwt.sign({ id : user._id }, config.secretkey, {
            expiresIn : 86400
        });

        res.status(200).send({auth: true, token: token});
    });
});

router.get("/me", function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({auth : false, message: "No token provided"});
    }
    jwt.verify(token, config.secretkey, function(err, decoded) {
        if (err) return res.status(500).send({auth : false, message: "Failed to authenticate token"});
        // res.status(200).send(decoded);
        User.findById(decoded.id, {password : 0} ,function(err, user) {
            if (err) return res.status(500).send("There was a problem finding the user");
            if (!user) return res.status(404).send("No such user found");
            res.status(200).send(user);
        });
    });
});

router.get("/logout", function(req, res, next) {
    res.status(200).send({auth : false, token: null});
});

module.exports = router;