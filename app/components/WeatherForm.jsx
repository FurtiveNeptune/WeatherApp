var React = require('react');

var WeatherForm = React.createClass({
render: function () {
    return (
      <form>
        <div>
          <input type="text" placeholder="Enter Location"/>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
