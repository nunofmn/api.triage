var Hapi        = require('hapi');
var config      = require('config');
require('./store');
var options     = config.hapiOptions;
var logger      = require('./modules/logger.js');
var fetchIssues = require('./modules/fetchIssues.js');
var async       = require('async');

fetchIssues();

var triagePlugins = [
    require('./plugins/issues')
];

var port    = parseInt(process.env.PORT) || config.port;
var server  = module.exports = new Hapi.Server(port, options);

async.each(triagePlugins, registerPlugin, function (err) {
  if (err) {
    logger.error('Failed to load a triagePlugins: ', err);
    process.exit(1);
  }
  server.start(function () {
    logger.info('Server started at: ' + server.info.uri);
  });
});

function registerPlugin(plug, cb) {
  server.pack.register(plug, {}, function (err) {
    if (err) {
      logger.error('Failed loading a nsp_plugin: ' + plug.name);
      process.exit(1);
    }
    cb();
  });
}
  



