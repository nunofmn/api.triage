var dulcimer = require('dulcimer');
var config  = require('config');

dulcimer.connect({
    type: 'level',
    path: config.db,
    bucket: 'defaultbucket'
});

require('./models/issue.js');