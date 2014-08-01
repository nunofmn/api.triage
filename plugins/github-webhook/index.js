var Hapi           = null; // Initialized during plugin registration
var events         = require('events');
var crypto         = require('crypto');
var webhook_secret = require('./../../config/secret.json').webhook_secret;
var parseGithubEvents = require('./../../modules/parseGithubEvents');
      
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

  // Register all the listeners
  Object.keys(parseGithubEvents).map(function (key) {
    eventEmitter.on(key, parseGithubEvents[key]);
  });

  next();
};

internals.setHapi = function (module) {
    Hapi = Hapi || module;
};  