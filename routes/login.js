var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages', 'login.html'));
});

router.post('/', function (req, res, next) {
  console.log('submitted');
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  res.send(req.body);
});

module.exports = router;
