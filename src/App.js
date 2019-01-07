import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Footer from './Footer'
import Music from './Music'
import Cycling from './Cycling'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/music' component={Music} />
              <Route exact path='/cycling' component={Cycling} />
              <Redirect from='/' to='/home'/>
            </Switch>
          <Footer />  
        </div>
      </Router>
    );
  }
}

export default App;

