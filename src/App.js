import React, { Component } from "react";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Protected from './components/Protected'
import LogOut from "./components/Logout";
import Login from "./components/login";
import './App.css'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Protected path="/" exact component= {Dashboard} />
          <Route path="/logout" exact component={LogOut} />
        </Switch>
      </Router>
    );
  }
}
