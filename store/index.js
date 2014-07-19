var dulcimer = require('dulcimer');
var config  = require('config');

dulcimer.connect({
    type: 'level',
    path: config.db,
    bucket: 'defaultbucket'
});

require('./models/issue.js');


// var level   = require('level');
// var config  = require('config');

// var db;     

// var models = {
//   Issue: require('./models/issue')
//   // add more models here
// };

// function attachDB() {
//   if (db) {   // if db already exists, do nothing 
//     return; // (this is because of the several plugins)                
//   }
//   db = level(config.db, {valueEncoding: 'json'});
  
//   Object.keys(models).forEach(function (modelname) {
//     models[modelname].options.db = db;
//   });
// }

// module.exports = {
//   models: models,
//   attachDB: attachDB
// };