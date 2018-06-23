import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import AddMessage from './AddMessage';
import { GET_MESSAGES } from '../actions/messageActions';
import { Feed,Icon, List } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
class Messages extends React.Component {


    handleDelete = (id) => {
        const url = "https://kwitter-api.herokuapp.com/messages";
            const deleteRequestOptions = {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + this.props.token,
                    "Content-Type": "application/json"
                    
                },
            }
            fetch(url + "/" + id, deleteRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data: ", data);
                fetch(url)
                .then(response => response.json())
                .then(data => {
                   
                    this.props.dispatch({
                        type: GET_MESSAGES,
                        messages: data
                    })
                    //Force a render with a simulated state change
                    this.setState({ state: this.state });
                })
            }).catch(error => {
                return error;
            });
    }

    render () {
        
        const messagesToMap = this.props.messages 
        
        return (
            <React.Fragment>
            <div>
                <AddMessage />
            </div>
            <List>
                {
                messagesToMap.map((item) => {
                    return (
                        <Feed>
                        <Feed.Event>
                            <Feed.Label>
                               <img alt='Profile Pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_V01aDRlNM26a0r9_rYj-CUtBpmeLow-Z2UbgHN49QlQmjfgzQ'/>
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                <Feed.User>{item.userId}</Feed.User>
                                <Feed.Date>{item.createdAt}</Feed.Date>
                                <Feed.Extra text>
                                    {item.text}
                                </Feed.Extra>    
                                </Feed.Summary>
                                <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    {item.likes.length} likes
                                </Feed.Like>
                                <Icon name='close' size='large' link onClick={(e) => this.handleDelete(item.id)} color='red'/>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                            
                        </Feed>
                    )
                })}
            </List>  
             </React.Fragment>   
      )
    }
}
const mapStateToProps = (state) => {
    return {
      messages: state.messageReducer.messages.messages,
      token: state.loginUserReducer.token
    }
  }
  
export default withRouter(connect (mapStateToProps)(Messages));

