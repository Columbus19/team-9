var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/pages', 'login.html'));
});

router.post('/', function (req, res, next) {
  const fs = require('fs');
  const fileContents = fs.readFileSync('./databases/people-data.json', 'utf8');
  const data = JSON.parse(fileContents);
  console.log(data);
  let username = req.body.username;
  let password = req.body.password;
  console.log('submitted!');
  console.log(req.body);
  res.redirect('..');
});

module.exports = router;
