exports = module.exports;

// event : {
//   type    : type,    // type of the event
//   id      : id,      // id of the event
//   payload : payload  // payload received
// }
  

exports.commit_comment = function (event) {
  // Triggered when a commit comment is created.
  // update the "updated_at" of the issue and the number of comments
};


exports.issue_comment = function (event) {
  // Triggered when an issue comment is created.
  // update the "updated_at" of the issue and the number of comments
};

exports.issues = function (event) {
  // Triggered when an issue is assigned, unassigned, labeled, unlabeled, opened, closed, or reopened.
  // https://developer.github.com/v3/activity/events/types/#issuesevent
};


exports.pull_request_review_comment = function (event) {
  // Triggered when a pull request is assigned, unassigned, labeled, unlabeled, opened, closed, reopened, or synchronized.
};














// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//      not needed, just to have the place holder
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

exports.ping = function (event) {
  // used to test the hook
  console.log('PING: ', event);
};

// exports['*'] = function (event) {
//   //~ do nothing
// };


// exports.create = function (event) {
//   // Represents a created repository, branch, or tag.
//   // ~ do nothing
// };

// exports.delete = function (event) {
//   // Represents a deleted branch or tag.
//   //~ do nothing
// };

// exports.deployment = function (event) {
//   // Represents a deployment.
//   //~ do nothing
// };

// exports.deployment_status = function (event) {
//   // Represents a deployment.
//   //~ do nothing
// };

// exports.fork = function (event) {
//   // Triggered when a user forks a repository.
//   //~ do nothing
// };

// exports.gollum = function (event) {
//   // Triggered when a Wiki page is created or updated.
//   //~ do nothing
// };

// exports.member = function (event) {
//   // Triggered when a user is added as a collaborator to a repository.
//   //~ do nothing
// };

// exports.page_build = function (event) {
//   // Represents an attempted build of a GitHub Pages site, whether successful or not.
//   //~ do nothing
// };

// exports.public = function (event) {
//   // Triggered when a private repository is open sourced. Without a doubt: the best GitHub event.
//   //~ do nothing
// };

// exports.pull_request = function (event) {
//   // Triggered when a comment is created on a portion of the unified diff of a pull request.
//   //~ do nothing
// };

// exports.push = function (event) {
//   // Triggered when a repository branch is pushed to.
//   //~ do nothing
// };

// exports.release = function (event) {
//   // Triggered when a release is published.
//   //~ do nothing
// };

// exports.status = function (event) {
//   // Triggered when the status of a Git commit changes.
//   //~ do nothing

// };

// exports.team_add = function (event) {
//   // Triggered when a user is added to a team or when a repository is added to a team.
//   //~ do nothing
// };

// exports.watch = function (event) {
//   // The WatchEvent is related to starring a repository, not watching. See this API blog post for an explanation.
//   //~ do nothing
// };


// X-Github-Event
// Name                        Description
// *                           Any time any event is triggered (Wildcard Event).
// commit_comment              Any time a Commit is commented on.
// create                      Any time a Branch or Tag is created.
// delete                      Any time a Branch or Tag is deleted.
// deployment                  Any time a Repository has a new deployment created from the API.
// deployment_status           Any time a deployment for the Repository has a status update from the API.
// fork                        Any time a Repository is forked.
// gollum                      Any time a Wiki page is updated.
// issue_comment               Any time an Issue is commented on.
// issues                      Any time an Issue is opened or closed.
// member                      Any time a User is added as a collaborator to a non-Organization Repository.
// page_build                  Any time a Pages site is built or results in a failed build.
// public                      Any time a Repository changes from private to public.
// pull_request_review_comment Any time a Commit is commented on while inside a Pull Request review (the Files Changed tab).
// pull_request                Any time a Pull Request is opened, closed, or synchronized (updated due to a new push in the branch that the pull request is tracking).
// push                        Any git push to a Repository. This is the default event.
// release                     Any time a Release is published in the Repository.
// status                      Any time a Repository has a status update from the API
// team_add                    Any time a team is added or modified on a Repository.
// watch                       Any time a User watches the Repository.