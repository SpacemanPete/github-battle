var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render () {
    return (
      <div>
        This is Awesome!!!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);