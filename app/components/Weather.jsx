var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      location: "Default location"
    };
  },
  getInitialState: function () {
    return {
      location: this.props.name
    };
  },
  handleNewData: function () {
    this.setState(updates);
  },
  render: function () {
    var location = this.state.location;

    return (
      <div>
        <WeatherMessage location={location}/>
        <WeatherForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Weather;
