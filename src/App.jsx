import React, { Component } from 'react';
import LoginUser from './components/LoginUser';
import Messages from './components/Messages';
export const ADD_MESSAGES = 'ADD_MESSAGES';
class App extends Component {
  
  componentDidMount() {
    fetch('https://kwitter-api.herokuapp.com/messages')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_MESSAGES,
          messages: data
        })
      })
  }

  render() {
    return (
      <div>
        <LoginUser />
        <Messages />
      </div>
    );
  }
}

export default App;

// Need to map state to props then do this.props.dispatch