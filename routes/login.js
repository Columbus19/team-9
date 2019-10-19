var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.sendFile(path.join(__dirname, 'src', 'components', 'pages', 'login.html'));
});

module.exports = router;
