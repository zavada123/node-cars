var express = require('express');
var router = express.Router();

var cars = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('cars', { cars: cars });
});

router.post('/data', function(req,res) {
  cars.push(req.body)
  res.send('ok');
});

module.exports = router;