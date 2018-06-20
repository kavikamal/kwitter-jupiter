import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import '../App.css';
import { Header, Icon, Button, Form, Grid } from 'semantic-ui-react'

class LoginUser extends Component {
    state = {
        credentials: {username: '', password: ''}
    }

    handleOnChange = (event) => {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({
            credentials: credentials
        });
    }
    
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = this.state.credentials.username.trim();
        const pword = this.state.credentials.password.trim();
        
        if (name !== '' && pword !== '') {
            this.props.dispatch(loginUser(this.state.credentials));
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Grid>
                <Grid.Row centered>
                <Header as='h2'> 
                    <Icon name='rss square' />
                    <Header.Content>Kwitter</Header.Content>

                </Header>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline>
                    <label>Username </label>
                    <input 
                        name="username" 
                        type="text"
                        className="loginFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.credentials.username} autoFocus
                    /> 
                </Form.Field>
                </Grid.Row>
                <Grid.Row centered>
                <Form.Field inline> 
                    <label>Password </label>
                    <input 
                        name="password"
                        type="password"
                        className="loginFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.credentials.password}
                    />
                </Form.Field>
                </Grid.Row>
                <br/>
                <Grid.Row centered>
                    <Button type="submit">Login</Button>
                    <br/>
                </Grid.Row>
                <Grid.Row centered>
                    <p>New user?  Register here</p>
                </Grid.Row>
                <Grid.Row centered>
                    <Button type="submit">Register</Button>
                </Grid.Row>
                </Grid>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        token: '',
        isLoggedIn: state.isLoggedIn,
        error: '',
        message: ''
    }
}

export default connect(mapStateToProps)(LoginUser);