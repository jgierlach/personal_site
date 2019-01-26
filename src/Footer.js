import React from 'react'
import './Footer.css'
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  NavLink,
  Link
} from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer" className="page-footer white z-depth-5">
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <p className="left black-font">© 2019 Jan Gierlach</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
