var Hapi = null; // Initialized during plugin registration

exports.name    = 'Issues';
exports.version = '1.0.0';

var internals   = {};

internals.defaults = {
    title: 'Issues Plugin'
};

exports.register = function (plugin, options, next) {
    // internals.setHapi(plugin.hapi);
    // var Utils = plugin.hapi.utils;
    // var settings = Utils.applyToDefaults(internals.defaults, options);

    require('./routes.js')(plugin);
    // console.log(['info', 'Issues'], 'user plugin registered');
    next();
};

internals.setHapi = function (module) {
    Hapi = Hapi || module;
};