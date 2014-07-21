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
};

// make all of this through query string

// server.route(
//   { method: 'GET',
//     path: '/issues/untouched',
//     handler: untouched }
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/withoutLabel',
//     handler: withoutLabel}
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/noMilestone',
//     handler: noMilestone}
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/noComments',
//     handler: noComments}
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/noActivitySevenDays',
//     handler: noActivitySevenDays}
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/noActivityOneYear',
//     handler: noActivityOneYear}
// );

// server.route(
//   { method: 'GET',
//     path: '/issues/noOneAssigned',
//     handler: noOneAssigned}
// );
