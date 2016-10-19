var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet');
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeStyle={{fontWeight: 'bold'}}>Get About</Link>
            </li>
            <li>
              <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Get Examples</Link>
            </li>
          </ul>
        </div>{/*Comment*/}
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather"/></li>
              <li><input type="submit" className="button" value="get Weather"/></li>
            </ul>
          </form>

        </div>
      </div>
    );
    }
});
var old = (props) => {
  return(
      <div>
        <h1>Navbar</h1>



      </div>
  )
};
module.exports = Nav;