var Hapi = null; // Initialized during plugin registration

exports.name    = 'Github-Webhook';
exports.version = '1.0.0';

var internals   = {};

internals.defaults = {
    title: 'Github Webhook Plugin'
};

exports.register = function (plugin, options, next) {
  require('./routes.js')(plugin);
  next();
};

internals.setHapi = function (module) {
    Hapi = Hapi || module;
};  