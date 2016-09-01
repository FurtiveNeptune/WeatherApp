var React = require('react');

var WeatherMessage = React.createClass({
  render:function () {
    var location = this.props.location;

    return (
      <div>
        <h1>Get Weather</h1>
      </div>
    );
  }
});

module.exports = WeatherMessage;
