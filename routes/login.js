var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages', 'login.html'));
});

router.post('/', function (req, res, next) {
  console.log('submitted!');
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  res.redirect('..');
});

module.exports = router;
