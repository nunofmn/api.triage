var Hapi           = null; // Initialized during plugin registration
var events         = require('events');
var crypto         = require('crypto');
var bl             = require('bl');
var webhook_secret = require('./../../config/secret.json').webhook_secret;
      
exports.name    = 'Github-Webhook';
exports.version = '1.0.0';

var internals   = {};

internals.defaults = {
    title: 'Github Webhook Plugin'
};

exports.register = function (plugin, options, next) {
  
  var eventEmitter   = new events.EventEmitter();

  plugin.route({ 
    method: 'POST',
    path: '/github-webhook',
    handler: receive
  });

  function receive (request, reply) {
    var sig     = request.headers['x-hub-signature'];
    var event   = request.headers['x-github-event'];
    var id      = request.headers['x-github-delivery'];
    var payload = request.payload;

    if (!sig) {
      eventEmitter.emit('error', new Error('Does not contain a X-Hub-Signature'));
      return reply(Hapi.error.unauthorized('Does not contain a X-Hub-Signature'));
    }

    if (!event) {
      eventEmitter.emit('error', new Error('Does not contain a X-Github-Event'));
      return reply(Hapi.error.unauthorized('Does not contain a X-Github-Event'));
    }

    if (!id) {
      eventEmitter.emit('error', new Error('Does not contain a X-Github-Delivery'));
      return reply(Hapi.error.unauthorized('Does not contain a X-Github-Delivery'));
    }

    if (sig !== signData(webhook_secret, JSON.stringify(request.payload))) {
      eventEmitter.emit('error', new Error('X-Hub-Signature does not match blob signature'));
      return reply(Hapi.error.unauthorized('X-Hub-Signature does not match blob signature'));
    }

    eventEmitter.emit(event, {
      event   : event,
      id      : id,
      payload : payload
    });

    reply('{"ok":true}');

    function signData (key, data) {
      return 'sha1=' + crypto.createHmac('sha1', key).update(data).digest('hex');
    }
  }

  plugin.expose({ events: eventEmitter });

  next();
};

internals.setHapi = function (module) {
    Hapi = Hapi || module;
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