// using module export to expose the index method to be used at routes-> index.js
/* GET home page */
module.exports.index = function (req, res) {
  res.render('index', { title: 'Welcome to The-Classroom'});
}
 
