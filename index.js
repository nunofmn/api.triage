var Hapi     = require('hapi');
var config   = require('config');
var options  = config.hapiOptions;
var logger   = require('./modules/logger.js');
var store    = require('./store');



store.attachDB();
// var fetchIssues = require('./modules/fetchIssues.js');
// var worker      = require('./modules/worker.js');

// Run the first time
// fetchIssues();

var port    = parseInt(process.env.PORT) || config.port;
var server  = module.exports = new Hapi.Server(port, options);

require('./routes');

server.start(function () {
  logger.info('Server started at ' + server.info.uri);
  // worker(); // Start the cron job
});


