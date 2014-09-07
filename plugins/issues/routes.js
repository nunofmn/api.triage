var Hapi       = require('hapi');
var resources  = require('./resources.js');
module.exports = function (server) {
    
  server.route({ 
    method: 'GET',
    path: '/issues',
    handler: resources.getIssues,
    config: {
      // validate: {
      //   payload: {
      //     thing: Hapi.types.String()
      //   }
      }
  });

  server.route({ 
    method: 'GET',
    path: '/issues/{id}',
    handler: resources.getIssueById,
    config: {
      // validate: {
      //   payload: {
      //     thing: Hapi.types.String()
      //   }
      }
  });
};

