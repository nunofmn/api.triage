var bunyan      = require('bunyan');
var config      = require('config');

module.exports  =  bunyan.createLogger({
  name: config.bunyan.name
});
