var express = require('express');
var router = express.Router();

var siteData = {
  title: 'GA Survey',
  version: '1.0.0',
  authors: 'Lidia Santos'
};
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.get('/surveycomplete', function(req, res, next) {
  res.render('surveycomplete');
});

module.exports = router;
