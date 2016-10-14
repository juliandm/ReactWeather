var React = require('react');
var {Link} = require('react-router');

var Nav = (props) => {
  return(
      <div>
        <h1>Navbar</h1>
        <Link to="/" activeClassName="active">Get Weather</Link>
        <Link to="/about">Get About</Link>
        <Link to="/examples">Get Examples</Link>
      </div>
  )
};
module.exports = Nav;