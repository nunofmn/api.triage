var Issue   = require('./../store/models/Issue.js');
var secret  = require('./../config/secret.json').secret;
var gi      = require('github-issues');
var logger  = require('./logger.js');

var config = {
  'repo'       : 'joyent/node',
  'useragent'  : secret.useragent,
  'state'      : 'open',
  'accesstoken': secret.accesstoken
};

gi.setConfig(config);

module.exports = function () {
  var issueStream = gi.fetchIssues('open');

  issueStream.on('_data', function (issue) {
    Issue.getByIndex('number', issue.number, function (err, issues) {
      if (err) { 
        return logger.error('Error: ' + err);
      } 

      // error
      if (issues.length > 1) {
        logger.error('There are more than one issue with the same number in the DB');
        return;
      }

      // update
      if (issues.length === 1) {
        

      }

      // create
      if (issues.length === 0) {
        Issue.create(issue).save(function (err) {
          if (err) { logger.error('Error: ' + err); }
        });
      }
    });

  });
};