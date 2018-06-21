import React, { Component } from 'react';
import { connect } from 'react-redux';


class Messages extends React.Component {
    render () {
        const messagesToMap = this.props.messages.messageReducer.messages.messages;
        return (
            <div>
                <ul>
                {
                messagesToMap.map((item, i) => {
                    console.log(item.text)
                    return <li key={i}>{item.text}</li>
                })}
                </ul>
            </div>        
      )
    }
}

const mapStateToProps = (state) => {
    return {
      messages: state
    }
  }
  
export default connect (mapStateToProps)(Messages);