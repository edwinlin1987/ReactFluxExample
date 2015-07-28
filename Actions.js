var AppDispatcher = require('./Dispatcher');
var AppConstants = require('./AppConstants');

module.exports = {

  increment: function(data) {
    AppDispatcher.dispatch({
      type: AppConstants.INCREMENT,
      data: data // none passed in this example but this is where you would do it.
    });
  }

};