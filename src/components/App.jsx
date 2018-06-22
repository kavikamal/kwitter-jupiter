import React, { Component } from 'react';
import { connect } from 'react-redux';
import KwitterEntry from './KwitterEntry';
import Messages from "./Messages";
import Likes from "./Likes";

import {  withRouter,Switch, Route } from "react-router-dom";
class App extends Component {
  
  render() {
    return (
      <React.Fragment>
      <Switch>
          <Route exact path="/" render={()=> <KwitterEntry></KwitterEntry> } />
          <Route path="/messages" render={()=> <Messages></Messages> } />
          <Route path="/likes" render={()=> <Likes></Likes> } />
      </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect ()(App));
