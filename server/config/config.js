var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/mb-development',
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://localhost/mb-production',
    port: process.env.PORT || 80
  }
}
