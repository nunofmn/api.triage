var dulcimer    = require('dulcimer');

var Issue = module.exports = new dulcimer.Model(
{
  url: { 
    type: 'string'
  }, 
  htmlUrl: { 
    type: 'string'
  },
  number: { 
    type: 'string',
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