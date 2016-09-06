var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {  //the e (for event) argument will be passed into onFormSubmit
    e.preventDefault();    //prevents the page from reloading

    var location = this.refs.location.value;   //<--- so if the input field has the text Philadelphia inside, the location variable is set to Philly

    if (location.length > 0) {
      this.refs.location.value = '';  //this will clear the input value from the browser on submit
      this.props.onSearch(location);  //calls parent function
    }
  },
render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter Location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
