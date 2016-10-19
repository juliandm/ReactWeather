var React = require('react');

var About = (props) => {
  return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This a weather application, based on React</p>
        <p>Here are some tools i used</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - This is the Application to fetch the weather
          </li>
        </ul>
      </div>
  )
};

module.exports = About;