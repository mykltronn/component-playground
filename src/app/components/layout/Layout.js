import React from 'react';

const Layout = (props) => {
  return (
    <div className="Layout">
      <h3 className="layout-title">Michael's React Component Playground</h3>
      <nav className="layout-nav">
        <NavLink
          className="nav-link"
          activeClassName="selected"
          exact to="/">
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="selected"
          exact to="/navigation">
          Navigation
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="selected"
          exact to="/organization">
          Organization
        </NavLink>
      </nav>
      {props.children}
    </div>
  )
}
