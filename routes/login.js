var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'login.html'));
});

router.post('/', function (req, res, next) {
  const fs = require('fs');
  const fileContents = fs.readFileSync('./databases/people-data.json', 'utf8');
  const data = JSON.parse(fileContents);
  let username = req.body.username;
  let password = req.body.password;
  let compareUser = data.clients[0].username;
  let comparePass = data.clients[0].password;
  if (compareUser == username && comparePass == password) {
    console.log('you\'re in!!');
    res.redirect('../dashboard');
  } else {
    //s\sthrow "Invalid Username and Password";
    res.redirect('../login');
    //alert("Invalid username and password combo!");
  }
});

module.exports = router;
