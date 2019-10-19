var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'dashboard', 'dashboard.html'));
});

router.post('/', function (req, res, next) {
  console.log(req.body);
});

module.exports = router;
