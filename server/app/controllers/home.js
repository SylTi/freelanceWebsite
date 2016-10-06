var express = require('express'),
    router = express.Router(),
    path = require('path'),
    db = require('../models');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function(req, res) {
    res.send('homepage!');
});

router.get('/blog', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../../client/dist/home.html')); // load the single view file (angular will handle the page changes on the front-end)
});

router.get('/blog/api/articles', function (req, res, next) {
    db.Article.findAll().then(function (articles) {
        res.json(articles);
    });
});

router.get('/blog/api/articles/:id', function (req, res, next) {
    db.Article.find({where: {id: req.params.id}}).then(function (articles) {
        res.json(articles);
    });
});

router.get('/blog/*', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../../client/dist/home.html')); // load the single view file (angular will handle the page changes on the front-end)
});
router.get('*', function(req, res) {
    res.json({text: 'index!'});
});

// router.get('/', function (req, res, next) {
//   db.Article.findAll().then(function (articles) {
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });
