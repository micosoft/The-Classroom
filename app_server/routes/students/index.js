var express = require('express');
var passportConfig = require('../../config/passport');
var router = express.Router();


var ctrlMain = require('../controllers/students/index');
var ctrlLessons = require('../controllers/students/lessons');
var ctrlBooking = require('../controllers/students/booking');
var ctrlTeachers = require('../controllers/students/teachers');
var ctrlMessages = require('../controllers/messaging/messages');


router.get('/', passportConfig.isAuthenticated, ctrlMain.index);
router.get('/partials/:name', passportConfig.isAuthenticated, ctrlMain.partials);

module.exports = router;
