import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Codigo from './components/codigo';
import Home from './components/home';

class App extends Component {
    render() {
      return (
        <Router>
          <div >
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/codigo" component={Codigo}/>
          <Route path="/home" component={Home}/>
          </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App;
