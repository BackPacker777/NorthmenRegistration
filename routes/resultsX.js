"use strict";

var express = require('express');
var router = express.Router();

router.get('/results', function (req, res, next) {
    for (let key in req.body) {
        let item = key + ": " + req.body[key];
        res.render('results', {item});
    }
    /*res.render('results', {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.firstName,
        dob: req.body.dob,
        gender: req.body.gender
    });*/
});

module.exports = router;