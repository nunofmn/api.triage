exports = module.exports;

exports['*'] = function (event) {

};

exports.commit_comment = function (event) {

};

exports.create = function (event) {

};

exports.delete = function (event) {

};

exports.deployment = function (event) {

};

exports.deployment_status = function (event) {

};

exports.fork = function (event) {

};

exports.gollum = function (event) {

};

exports.issue_comment = function (event) {

};

exports.issues = function (event) {

};

exports.member = function (event) {

};

exports.page_build = function (event) {

};

exports.public = function (event) {

};

exports.pull_request_review_comment = function (event) {

};

exports.pull_request = function (event) {

};

exports.push = function (event) {

};

exports.release = function (event) {

};

exports.status = function (event) {

};

exports.team_add = function (event) {

};

exports.watch = function (event) {

};

exports.ping = function (event) {
  // used to test the hook
  console.log('PING: ', event);
};


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