import React from 'react';
import { NavLink } from 'react-router-dom';
import './layout.css';

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="navigation">
        <h3 className="navigation-title">Michael's React Component Playground</h3>
        <nav className="navigation-nav">

          <NavLink
            className="nav-link"
            activeClassName="selected"
            exact to="/">
            Home
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="selected"
            exact to="/organization">
            Organization
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="selected"
            exact to="/navigation">
            Navigation
          </NavLink>

        </nav>
      </div>
      {props.children}
    </div>
  )
}

export default Layout;
