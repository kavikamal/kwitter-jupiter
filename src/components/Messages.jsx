import React, { Component } from 'react';
import { connect } from 'react-redux';


class Messages extends React.Component {
    render () {
        console.log(this.props.messages);
        return (
            <div id="messages">Hello Kwitter User ..This is Messeges Page</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      messages: state
    }
  }
  
export default connect (mapStateToProps)(Messages);