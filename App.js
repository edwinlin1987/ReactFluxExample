var React = require('react');
var Store = require('./Store.js');
var Actions = require('./Actions.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      count : 0
    };
  },

  increment: function() {
    Actions.increment();
  },

  _onChange: function () {
    this.setState({ 
      count : Store.getCount()
    });
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
        <div> The Store's count: {this.state.count} </div>
        <button onClick={this.increment}>Increment Count!</button> 
      </div>
    );
  }
});

module.exports = App;