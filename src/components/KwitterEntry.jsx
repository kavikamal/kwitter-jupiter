import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import '../App.css';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';

class KwitterEntry extends Component {

    render() {
        return (
       <Grid>     
       <LoginUser/> 
       <br/>
       <RegisterUser/>
       </Grid> 
        );
    }
}

export default KwitterEntry;