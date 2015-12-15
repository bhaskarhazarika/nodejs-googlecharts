var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', chartTitle:'No of Orders v/s Time' });

});

module.exports = router;
