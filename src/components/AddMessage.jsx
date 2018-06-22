import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addNewMessage } from '../actions';
import '../App.css';
import { Form, Button, Container } from 'semantic-ui-react';
class AddMessage extends Component {
    state = {
        text: ''
    }
    handleOnChange = (event) => {
        const newMsg = event.target.value;
        this.setState({
            text: newMsg
        });
    }
    
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const newMsg = this.state.text.trim();
    console.log("this.props.messages: ", this.props.messages)
    console.log("this.props.token: " + this.props.token)
  
        if (newMsg !== '') {
            //this.props.dispatch(addNewMessage(newMsg));
            const url = "https://kwitter-api.herokuapp.com/messages";
            const postRequestOptions = {
                method: "POST",
                headers: {
                    // "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTI5NTkwNTc2fQ.mkjAhZhfaxCpUSfoGXq9Yw2xBJBP8xA2WGseI7Yp9Pc",
                    "Authorization": "Bearer " + this.props.token,
                    "Content-Type": "application/json"
                    
                },
                body: JSON.stringify({text: newMsg}),
            }
            fetch(url, postRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data: ", data);
                
                // dispatch({ type: ADD_MESSAGE,
                //             id: data.id, 
                //             text: data.text, 
                //             userId: data.userId,  
                //             updatedAt: data.updatedAt,
                //             createdAt: data.createdAt
                //         });
            }).catch(error => {
                return error;
            });
            this.setState({
                text: ''
            });
        }
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.TextArea
                    autoHeight
                    onChange={this.handleOnChange}
                    value={this.state.text}
                    placeholder="What's happening?"
                    rows={3}
                    />
                    <Button id="tweetBtn" type="submit" color="teal">Tweet</Button>
                </Form>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.loginUserReducer.token,
        messages: state.messageReducer.messages.messages
    }
}
export default connect(mapStateToProps)(AddMessage);