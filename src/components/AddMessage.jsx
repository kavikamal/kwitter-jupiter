import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_MESSAGES } from '../actions/messageActions';
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
  
        if (newMsg !== '') {
            const url = "https://kwitter-api.herokuapp.com/messages";
            const postRequestOptions = {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + this.props.token,
                    "Content-Type": "application/json"
                    
                },
                body: JSON.stringify({text: newMsg}),
            }
            fetch(url, postRequestOptions)
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