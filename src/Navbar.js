import React from 'react';
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
          <div className="nav-wrapper">
            {/* Beginning of desktop navbar */}
            {/* Hamburger navbar icon */}
            <a className="sidenav-trigger" href="#" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
               {/* Link to home component */}  
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li> 
              <li>
               {/* Link to contact component */}
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
                {/* Link to blog component */}
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog/News   
                </NavLink>
              </li>
              <li>
                {/* Link to cycling component */}
                <NavLink to='/music'
                  activeStyle={{
                  color: '#EF4907'
                }}>Music   
                </NavLink>
              </li>
              <li>
                {/* Link to cycling component */}
                <NavLink to='/cycling'
                  activeStyle={{
                  color: '#EF4907'
                }}>Cycling   
                </NavLink>
              </li>
            </ul>
            {/* End of desktop navbar beginning of mobile navbar */}
            <ul id="mobile-links" className="sidenav">
              <li>
                {/* Mobile Link to home component */}
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to contact component */} 
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to music component */} 
                <NavLink to='/music'
                  activeStyle={{
                  color: '#EF4907'
                }}>Music   
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to blog component */} 
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog/News   
                </NavLink>
                {/* Mobile Link to cycling component */} 
                <NavLink to='/cycling'
                  activeStyle={{
                  color: '#EF4907'
                }}>Cycling   
                </NavLink>
              </li> 
            </ul>
          </div>
        </nav>
    )
  }

export default Navbar