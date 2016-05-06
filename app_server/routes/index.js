var express = require('express');
var router = express.Router();

// to use the controller assigned to this view
var ctrlMain = require('../controllers/main');


/*
users controller
*/
var ctrlMainStudents = require('../controllers/students/index');
//var ctrlLessons = require('../controllers/students/lessons');
//var ctrlBooking = require('../controllers/students/booking');
//var ctrlTeachers = require('../controllers/students/teachers');
//var ctrlMessages = require('../controllers/messaging/messages');

/*
teachears controllers
*/

/*
general controllers
*/

router.get('/', ctrlMain.index);

router.get('/student', ctrlMainStudents.index)


//students controllers

module.exports = router;
