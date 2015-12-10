var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {});
});

router.post('/results', function (req, res) {
    res.render('results', req.body);
});

module.exports = router;