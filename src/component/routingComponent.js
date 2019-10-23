import React from "react";
import "../index.css";
//import { Route, NavLink, Router, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HomeComponent from './homeComponent'


class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
          </Switch>        
        </div>
      </Router>
    );
  }
}
export default Routing;
