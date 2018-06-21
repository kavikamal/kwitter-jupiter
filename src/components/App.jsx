import React, { Component } from 'react';
import { connect } from 'react-redux';
import KwitterEntry from './KwitterEntry';
import Messages from './Messages';

class App extends Component {
  
  componentDidMount() {
   
  }

  render() {
    return (
      <React.Fragment>
          <KwitterEntry/>
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