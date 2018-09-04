import React from "react";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink to="/" className="navbar-brand">Project Name</NavLink>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li ><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Navbar;
