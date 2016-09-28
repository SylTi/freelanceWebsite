var express = require('express'),
  router = express.Router(),
  path = require('path'),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/../../../client/dist/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});
// router.get('/', function (req, res, next) {
//   db.Article.findAll().then(function (articles) {
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });
