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
  //console.log('submitted!');
  //console.log(req.body);
  //console.log("json username "+ data.clients[0].username);
  //console.log("json password "+ data.clients[0].password);
  let compareUser = data.clients[0].username;
  let comparePass = data.clients[0].password;
  if(compareUser == username && comparePass == password) console.log('you\'re in!!');
  else console.log('you\'re not in');
  res.redirect('..');
});

module.exports = router;
