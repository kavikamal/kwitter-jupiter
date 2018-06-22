import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from '../actions';
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
            this.props.dispatch(addNewMessage(newMsg));
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

// const mapStateToProps = (state) => {
//     return {
//         username: state.username,
//         token: this.props.token,
//         isLoggedIn: state.isLoggedIn,
//         error: '',
//         message: '',
//         isRegister: state.isRegister
//     }
// }

export default connect()(AddMessage);