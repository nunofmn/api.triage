var Issue   = require('./../../store/models/issue.js');
// var User    = store.models.Issue; CHANGE THIS
var config  = require('config');
var Hapi    = require('hapi');
var async   = require('async');

exports.getIssues = function (request, reply) {

  var page = parseInt(request.query.page) || 1;
  var paginationfn = [];

  // Function to get first page of issues
  var getFirstIssues = function(callback) {
    Issue.all({sortBy: 'number', limit: 10}, function(err, models, pagination) {
      if(err) {
        callback(err, null);
      }else {
        callback(null, pagination.continuation, models)
      }
    });
  };

  // Function to get n page of issues
  var getIssuesPagination = function(pagetoken, models, callback) {
    Issue.all({sortBy: 'number', limit: 10, continuation: pagetoken}, function(err, models, pagination) {
      if(err) {
        callback(err, null);
      }else {
        callback(null, pagination.continuation, models)
      }
    });
  };

  // Necessary to always go through first page of issues
  paginationfn.push(getFirstIssues);

  // Iterate through pages, until get required page 
  for(var i=0; i<(page-1); i++) {
    paginationfn.push(getIssuesPagination);
  }

  // Serial execution of functions
  async.waterfall(paginationfn, function(err, pagetoken, models) {
    reply(models);
  })


  // TODO paginate the issues as github does (in the header);
  // https://github.com/fritzy/dulcimer#all look at pagination feature
  // returnStream will be awesome for the websockets API  
};

exports.getIssueById = function (request, reply) {
  Issue.getByIndex('number', request.params.id, function(err, model) {
    reply(model);
  });
};
