

var express = require('express'),
    config = require('./config/config'),
    db = require('./app/models'),
    fs = require('fs'),
    http = require('http'),
    https = require('https');

var app = express();

require('./config/express')(app, config);
// @todo add https
db.sequelize
    .sync(/*{force: true}*/)
    .then(function () {
        if (process.env.NODE_ENV === 'production') {

            var options = {
                cert: fs.readFileSync(__dirname+'/tls/cert.pem'),
                key: fs.readFileSync(__dirname+'/tls/key.pem')
            };
            var serverHttps = https.createServer(
                options,
                app
            );
            serverHttps.listen(4443, function () {
                console.log('Express TLS server listening on port ' + 4443);
            });
        }
        app.listen(config.port, function () {
            console.log('Express server listening on port ' + config.port);
        });
    }).catch(function (e) {
    throw new Error(e);
});

