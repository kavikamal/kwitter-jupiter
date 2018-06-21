import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUserAction';
import '../App.css';
import { Button, Form, Grid } from 'semantic-ui-react'

class RegisterUser extends Component {
    state = {
        userDetails: {
                      username: "",
                      password: "",
                      confirmPassword:"",
                      displayName: ""
                    }
    }
    

    handleOnChange = (event) => {
        const field = event.target.name;
        const userDetails = this.state.userDetails;
        userDetails[field] = event.target.value;
        this.setState({
            userDetails
        });
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = this.state.userDetails.username.trim();
        const password = this.state.userDetails.password.trim();
        const confirmPassword = this.state.userDetails.confirmPassword.trim();
        const displayName = this.state.userDetails.displayName.trim();
        
        if ( name !== '' && password !== '' && confirmPassword !== '' && displayName !== '' && password === confirmPassword) {
            this.props.dispatch(registerUser(this.state.userDetails));
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Grid>
                <Grid.Row centered>
                <Grid.Row centered>
                    <p>New user?  Register here</p>
                </Grid.Row>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline>
                    <label>Username </label>
                    <input 
                        name="username" 
                        type="text"
                        className="registerFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.username} autoFocus
                    /> 
                </Form.Field>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline> 
                    <label>Password </label>
                    <input 
                        name="password"
                        type="password"
                        className="registerFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.password}
                    />
                </Form.Field>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline>
                    <label>Confirm Password </label>
                    <input 
                        name="confirmPassword" 
                        type="password"
                        className="registerFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.confirmPassword} 
                    /> 
                </Form.Field>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline>
                    <label>Display Name </label>
                    <input 
                        name="displayName" 
                        type="text"
                        className="registerFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.userDetails.displayName}
                    /> 
                </Form.Field>
                </Grid.Row>
                <br/>
                
                <Grid.Row centered>
                    <Button type='submit'>Signup</Button>
                    <br/>
                </Grid.Row>
               
                </Grid>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state,
        error: '',
        message: ''
    }
}

export default connect(mapStateToProps)(RegisterUser);