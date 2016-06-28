var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../../models/User');

module.exports.index = function (req, res) {
  	res.render('students/index', { title: 'Welcome to The-Classroom student'});        
}

module.exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('students/partials/' + name);
};
