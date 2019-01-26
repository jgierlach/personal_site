import React from 'react'
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  NavLink,
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="white z-depth-3">
      {/* <!-- Dropdown Structure --> */}
      <ul id="dropdown1" className="dropdown-content">
        <li>
          {/* Link to music component */}
          <NavLink
            className="black-font"
            to="/music"
            activeStyle={{
              color: 'lightgrey'
            }}
          >
            Music
          </NavLink>
        </li>
        <li class="divider" />
        <li>
          {/* Link to cycling component */}
          <NavLink
            className="black-font"
            to="/cycling"
            activeStyle={{
              color: 'lightgrey'
            }}
          >
            Cycling
          </NavLink>
        </li>
      </ul>

      <div className="nav-wrapper">
        {/* Beginning of desktop navbar */}
        {/* Hamburger navbar icon */}
        <a className="sidenav-trigger" href="#" data-target="mobile-links">
          <i className="material-icons black-font">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {/* Link to home component */}
            <NavLink
              className="black-font"
              to="/home"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* Link to contact component */}
            <NavLink
              className="black-font"
              to="/contact"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Contact
            </NavLink>
          </li>
          {/* <!-- Dropdown Trigger --> */}
          <li>
            <NavLink
              className="dropdown-trigger black-font"
              to="#!"
              data-target="dropdown1"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Hobbies
              <i className="material-icons right">arrow_drop_down</i>
            </NavLink>
          </li>
          <li>
            {/* Link to projects component */}
            <NavLink
              className="black-font"
              to="/blog"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            {/* Link to cycling component */}
            <NavLink
              className="black-font"
              to="/music"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Music
            </NavLink>
          </li>
          <li>
            {/* Link to cycling component */}
            <NavLink
              className="black-font"
              to="/cycling"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Cycling
            </NavLink>
          </li>
        </ul>
        {/* End of desktop navbar beginning of mobile navbar */}
        <ul id="mobile-links" className="sidenav">
          <li>
            {/* Mobile Link to home component */}
            <NavLink
              className="black-font"
              to="/home"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* Mobile Link to contact component */}
            <NavLink
              className="black-font"
              to="/contact"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Contact
            </NavLink>
          </li>
          {/* <!-- Dropdown Trigger --> */}
          <li>
            <NavLink
              className="dropdown-trigger black-font"
              to="#!"
              data-target="dropdown1"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Hobbies
              <i className="material-icons right">arrow_drop_down</i>
            </NavLink>
          </li>
          <li>
            {/* Mobile Link to music component */}
            <NavLink
              className="black-font"
              to="/music"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Music
            </NavLink>
          </li>
          <li>
            {/* Mobile Link to blog component */}
            <NavLink
              className="black-font"
              to="/blog"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Blog/News
            </NavLink>
            {/* Mobile Link to cycling component */}
            <NavLink
              className="black-font"
              to="/cycling"
              activeStyle={{
                color: 'lightgrey'
              }}
            >
              Cycling
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
