var express = require('express'),
    router = express.Router(),
    path = require('path'),
    db = require('../models');

module.exports = function (app) {
    app.use('/', router);
};

function getHomePage(res) {
    res.sendFile(path.resolve(__dirname+'/../../../site/index.html'));
}

router.get('/', function(req, res) {
    getHomePage(res);
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
    db.Article.find({where: {titleSlug: req.params.id}}).then(function (articles) {
        res.json(articles);
    });
});

router.get('/blog/*', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../../client/dist/home.html')); // load the single view file (angular will handle the page changes on the front-end)
});

router.post('/send_mail', function(req, res) {
    var exec = require("child_process").exec;
    var pathMail = path.resolve(__dirname + '/../../../site/assets/php/contact.php');
    var bodyEncoded = 'name='+req.body.name
        + '&email=' + req.body.email
        + '&message=' + req.body.message;

    exec('php ' + pathMail + ' "' + bodyEncoded + '"'
        , function (error, stdout, stderr) {
            res.send(stdout);
            console.error("stdout: "+ stdout + "\nerror: "+ error+ "\nstdrerr :" + stderr);
    });
});

router.get('/robots.txt', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../../site/robots.txt'));
});

router.get('*', function(req, res) {
    getHomePage(res);
});

