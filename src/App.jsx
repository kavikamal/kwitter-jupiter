import React, { Component } from 'react';
import LoginUser from './components/LoginUser';
import Messages from './components/Messages';

class App extends Component {
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
