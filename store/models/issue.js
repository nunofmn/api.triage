var dulcimer    = require('dulcimer');
var verymodel   = require('verymodel');
// var bcrypt      = require('bcrypt');
// var crypto      = require('crypto');
// var async       = require('async');

// var type = verymodel.VeryType;

var Issue = new dulcimer.Model(
{
  url: { 
    type: 'string'
  }, 
  htmlUrl: { 
    type: 'string'
  },
  number: { 
    type: 'string',
    // unique: true,
    index: true

  }, // issue ID number
  state: { 
    type: 'string'
  }, 
  title: { 
    type: 'string'
  }, 
  body: { 
    type: 'string'
  }, 
  user: { },      // object
  labels: { 
    type: 'array'
  },              // array
  assignee: { },  // object
  milestone: { }, // object
  comments: { 
    type: 'integer'
  }, 
  pullRequest: { }, // object
  closedAt: { 
    type: 'string',
    processOut: function (value) {
      return new Date(value);
    }
  }, // date
  createdAt: { 
    type: 'string',
    processOut: function (value) {
      return new Date(value);
    }
  }, // date
  updatedAt: { 
    type: 'string',
    processOut: function (value) {
      return new Date(value);
    }
  } // date
},
{
  name: 'issue',
  includeKey: false,
  savePrivate: true
});






// User.findByUserName = function (username, callback) {
//     User.findByIndex('username', username, callback);
// };

// User.removeAll = function (cb) {
//     User.all(function (err, dbUsers) {
//         async.each(dbUsers, deleteUser, function done(err) {
//             cb(err);
//         });

//         function deleteUser(user) {
//             user.delete(function (err) {
//                 if (err) {
//                     throw err;
//                 }
//             });
//         }
//     });
// };

module.exports = Issue;
