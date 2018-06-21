import React, { Component } from 'react';
import KwitterEntry from './components/KwitterEntry';


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
      <React.Fragment>
          <KwitterEntry/>
      </React.Fragment>
    );
  }
}

export default App;

// Need to map state to props then do this.props.dispatch