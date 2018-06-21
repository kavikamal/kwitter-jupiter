import React, { Component } from 'react';
import { connect } from 'react-redux';
import KwitterEntry from './KwitterEntry';
import { ADD_MESSAGES } from '../reducers/getMessagesReducer'

class App extends Component {
  
  componentDidMount() {
    fetch('https://kwitter-api.herokuapp.com/messages')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.dispatch({
          type: ADD_MESSAGES,
          messages: data
        })
      })
  }

  render() {
    return (
      <React.Fragment>
          <KwitterEntry/>
      </React.Fragment>
    );
  }
}


export default connect ()(App);

// Need to map state to props then do this.props.dispatch