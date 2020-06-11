
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {About,Blog,Contact,Home,NavBar,Portfolio} from './components/Index'
// import Blogs from './components/Blog'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import NavBar from './components/NavBar'
// import Portfolio from './components/Portfolio'


import logo from './logo.svg';
import './App.css';

class  App extends Component {

  render() {

  return (

    <Router>
        <NavBar />
        <Switch>
          <Route path="/portfolio"> <Portfolio /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/blogs"> <Blog /> </Route>
          <Route path="/contacts"> <Contact/> </Route>
          <Route path="/home"> <Home /> </Route>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
    </Router>
  );
  }
}

export default App;
