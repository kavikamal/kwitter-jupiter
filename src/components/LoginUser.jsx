import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Header, Icon, Button, Form, Grid } from 'semantic-ui-react'

class LoginUser extends Component {
    state = {
        username: '',
        password: '',
        isLoggedIn: false
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = this.state.username.trim();
        const pword = this.state.password.trim();
        if (name !== '' && pword !== '') {
            this.props.dispatch(loginUser(name, pword));
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Header as='h2'> 
                    <Icon name='rss square' />
                    <Header.Content>Kwitter</Header.Content>

                </Header>
                <Form.Field>
                    <label>Username </label>
                    <input 
                        name="username" 
                        type="text"
                        className="loginFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.username} autoFocus
                    /> 
                </Form.Field>
                <Form.Field>
                    <label>Password </label>
                    <input 
                        name="password"
                        type="password"
                        className="loginFormInput"
                        onChange={this.handleOnChange}
                        value={this.state.password}
                    />
                </Form.Field>
                <br/>
                <Grid>
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

export default connect()(LoginUser);