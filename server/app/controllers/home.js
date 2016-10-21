var express = require('express'),
    router = express.Router(),
    path = require('path'),
    db = require('../models')
    RSS = require('rss');

module.exports = function (app) {
    app.use('/', router);
};

function getHomePage(res) {
    res.sendFile(path.resolve(__dirname+'/../../../site/index.html'));
}

function findAllArticles(cb) {
    db.Article.findAll().then(function (articles) {
        cb(articles);
    });
}

function buildRss(res) {
    /* lets create an rss feed */
    var feed = new RSS({
        title: 'SylTi\'s Blog',
        description: 'Learn more about web technologies through articles, tutorials and study cases.',
        feed_url: 'http://sylti.eu/blog/rss.xml',
        site_url: 'http://sylti.eu/blog',
        image_url: 'http://www.gravatar.com/avatar/bce7e5bcf9a3588756fbefa18519a768?s=140',
        managingEditor: 'Sylvain Tissier',
        webMaster: 'Sylvain Tissier',
        copyright: '2016 Sylvain Tissier',
        language: 'en',
        categories: ['Web development','Angular','Node', 'Vagrant'],
        pubDate: Date.now,
        ttl: '60',
    });

    /* loop over data and add to feed */
    findAllArticles((articles) => addArticlesToFeed(articles, feed, res.send.bind(res)));
}

function addArticlesToFeed(articles, feed, cb) {
    articles.map((article) => feed.item({
        title:  article.title,
        // description: 'use this for the content. It can include html.',
        description: article.text.substring(0, 200),
        url: 'https://sylti.eu/blog/'+article.titleSlug, // link to the item
        author: 'SylTi', // optional - defaults to feed author property
        date: article.createdAt, // any format that js Date can parse.
    }));

    cb(feed.xml());
}

router.get('/', function(req, res) {
    getHomePage(res);
});

router.get('/blog', function(req, res) {
    res.sendFile(path.resolve(__dirname+'/../../../client/dist/home.html')); // load the single view file (angular will handle the page changes on the front-end)
});

router.get('/blog/api/articles', function (req, res, next) {
    findAllArticles(res.json.bind(res));
});

router.get('/blog/api/articles/:id', function (req, res, next) {
    db.Article.find({where: {titleSlug: req.params.id}}).then(function (articles) {
        res.json(articles);
    });
});

router.get('/blog/rss.xml', function(req, res) {
    res.set('Content-Type', 'text/xml');
    buildRss(res);
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

