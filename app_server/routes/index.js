var express = require('express');
var router = express.Router();

// to use the controller assigned to this view
var ctrlMain = require('../controllers/main');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

// taking the controller out of the route probe of concept
//var homepageController = function (req, res) {
//  res.render('index', { title : 'controller out of the route'});
//}

/* GET home page */
//router.get('/', 'homepageController');
router.get('/', ctrlMain.index);

module.exports = router;
