var express = require('express');
var router = express.Router();

router.get('/results', function (req, res, next) {
    res.render('results', {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        middleName: req.body.firstName,
        dob: req.body.dob,
        gender: req.body.gender
    });
});

module.exports = router;