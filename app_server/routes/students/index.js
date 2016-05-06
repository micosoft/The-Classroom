var express = require('express');
var router = express.Router();


var ctrlMain = require('../controllers/students/index');
var ctrlLessons = require('../controllers/students/lessons');
var ctrlBooking = require('../controllers/students/booking');
var ctrlTeachers = require('../controllers/students/teachers');
var ctrlMessages = require('../controllers/messaging/messages');


router.get('/', ctrlMain.index);

module.exports = router;
