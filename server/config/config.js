var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:root@192.168.0.42/freelanceWebsite'
  },

  debug: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:root@192.168.0.42/freelanceWebsite'
  },

  test: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/server-production'
  }
};

module.exports = config[env];
