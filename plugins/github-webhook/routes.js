var Hapi       = require('hapi');
var resources  = require('./resources.js');
module.exports = function (server) {
    
  server.route({ 
    method: 'POST',
    path: '/github-webhook',
    handler: resources.receive
  });
};
