var Issue   = require('./../../store/models/issue.js');
// var User    = store.models.Issue; CHANGE THIS
var config  = require('config');
var Hapi    = require('hapi');
var Boom    = require('boom');
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
        callback(null, pagination, models);
      }
    });
  };

  // Function to get n page of issues
  var getIssuesPagination = function(pagetoken, models, callback) {
    Issue.all({sortBy: 'number', limit: 10, continuation: pagetoken.continuation}, function(err, models, pagination) {
      if(err) {
        callback(err, null);
      }else {
        callback(null, pagination, models);
      }
    });
  };

  var generateLinkHeader = function(req, pagination) {
      var linkField = [];
      var totalPages = Math.ceil(parseInt(pagination.total)/10);
      var pageNumber = parseInt(req.query.page);

      // Next page link
      if(pageNumber < totalPages) {
          linkField.push('<http://' + req.info.host + '/issues?page=' + (pageNumber+1) + '>; rel="next"');
      }

      // Previous page link
      if(pageNumber !== 1) {
          linkField.push('<http://' + req.info.host + '/issues?page=' + (pageNumber-1) + '>; rel="previous"');
      }

      // First page link
      linkField.push('<http://' + req.info.host + '/issues?page=1; rel="first"');

      // Last page link
      linkField.push('<http://' + req.info.host + '/issues?page=' + totalPages + '>; rel="last"');

      return linkField.join(', ');
  };

  // Necessary to always go through first page of issues
  paginationfn.push(getFirstIssues);

  // Iterate through pages, until get required page
  for(var i=0; i<(page-1); i++) {
    paginationfn.push(getIssuesPagination);
  }

  // Serial execution of functions
  async.waterfall(paginationfn, function(err, pagination, models) {
      if(Math.ceil(parseInt(pagination.total)/10) <= page) {
          reply(models).header('Link', generateLinkHeader(request, pagination));
      }else {
          reply(Boom.badRequest('Page dont exist.'));
      }
  });

  // TODO paginate the issues as github does (in the header);
  // https://github.com/fritzy/dulcimer#all look at pagination feature
  // returnStream will be awesome for the websockets API  
};

exports.getIssueById = function (request, reply) {
  Issue.getByIndex('number', request.params.id, function(err, model) {
    reply(model);
  });
};
