import React, { Component } from 'react';
import { connect } from 'react-redux';
import KwitterEntry from './components/KwitterEntry';
import Messages from './components/Messages';
import { ADD_MESSAGES } from './reducers/getMessagesReducer'

class App extends Component {
  
  componentDidMount() {
    fetch('https://kwitter-api.herokuapp.com/messages')
      .then(response => response.json())
      .then(data => {
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
          <Messages />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect (mapStateToProps)(App);

// Need to map state to props then do this.props.dispatch