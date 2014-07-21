var Hapi       = require('hapi');
var resources  = require('./resources.js');
module.exports = function (server) {
    
  server.route({ 
    method: 'GET',
    path: '/github-webhook',
    handler: resources.SOMETHING
  });
};
