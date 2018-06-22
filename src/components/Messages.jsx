import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';


class Messages extends React.Component {
    render () {
        // Need to find away to reduce this
        const messagesToMap = this.props.messages.messageReducer.messages.messages;
        return (
            <div>
                <ul>
                {
                messagesToMap.map((item, i) => {
                    console.log(item)
                    return (
                        <li key={i} className="messageItem">{item.text}</li>
                    )
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