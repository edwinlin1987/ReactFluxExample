var AppDispatcher = require("./Dispatcher.js");
var AppConstants = require("./AppConstants");
var assign = require("react/lib/Object.assign");
var EventEmitter = require('events').EventEmitter;

var _storage = {
  count: 0
};

var increment = function() {
  _storage.count++;
};

var Store = assign({},EventEmitter.prototype, {
  getCount: function() {
    return _storage.count;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

Store.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {

    case AppConstants.INCREMENT:
      increment(action.data);
      Store.emitChange();
      break;

    default:
  }
});

module.exports = Store;