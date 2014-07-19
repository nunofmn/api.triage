var Issue       = require('model').getModelByName('Issue');
var secret      = require('./../config/secret.json').secret;
var gi          = require('github-issues');


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
    // store the issue
  });
};





// function storeIssue(issue) {
//   // 1. Verify if exists
//   Issue.all({number: issue.number}, gotIssues(issue));

//   function gotIssues(_issue) {
//     var issue = _issue;

//     return function (err, result) {
//       if (err) {
//         return console.log(err);
//       }
//       if (result.length > 0) {
//         // 1.a if yes - update
//         result[0].url = issue.url;
//         result[0].htmlUrl = issue.html_url;
//         result[0].state = issue.state;
//         result[0].title = issue.title;
//         result[0].body = issue.body;
//         result[0].user = issue.user;
//         result[0].labels = issue.labels;
//         result[0].assignee = issue.assignee;
//         result[0].milestone = issue.milestone;
//         result[0].comments = issue.comments;
//         result[0].pullRequest = issue.pull_request;
//         result[0].closedAt = issue.closed_at;
//         result[0].createdAt = issue.created_at;
//         result[0].updatedAt = issue.updated_at;
//         result[0].save(function (err, data) {
//           if (err) {
//             return console.log(err);
//           }
//           console.log('Updated Issue: '.green+issue.number + ' ' + new Date());
//         });

//       } else {
//         // 1.b if not - store
//         var cleanIssue = {};

//         cleanIssue.url = issue.url;
//         cleanIssue.htmlUrl = issue.html_url;
//         cleanIssue.number = issue.number;
//         cleanIssue.state = issue.state;
//         cleanIssue.title = issue.title;
//         cleanIssue.body = issue.body;
//         cleanIssue.user = issue.user;
//         cleanIssue.labels = issue.labels;
//         cleanIssue.assignee = issue.assignee;
//         cleanIssue.milestone = issue.milestone;
//         cleanIssue.comments = issue.comments;
//         cleanIssue.pullRequest = issue.pull_request;
//         cleanIssue.closedAt = issue.closed_at;
//         cleanIssue.createdAt = issue.created_at;
//         cleanIssue.updatedAt = issue.updated_at;

//         var newIssue = Issue.create(cleanIssue);
//         newIssue.save( function (err, data) {
//           if (err) {
//             return console.log(err);
//           }
//           console.log('New Issue Saved: '.green+data.number + ' ' + new Date());
//         });
//       }
//     };
//   }
// }
