var Issue   = require('./../../store/models/issue.js');
// var User    = store.models.Issue; CHANGE THIS
var config  = require('config');
var Hapi    = require('hapi');



exports.getIssues = function (request, reply) {
  Issue.all({sortBy: 'number'}, function(err, models, pagination) {
    reply(models);
  });

  // TODO paginate the issues as github does (in the header);
  // https://github.com/fritzy/dulcimer#all look at pagination feature
  // returnStream will be awesome for the websockets API  
};
