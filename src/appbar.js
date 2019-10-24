import React, { Component } from 'react';
import {Typography, AppBar, Toolbar} from '@material-ui/core';

const style={
  appbar: { alignItems: 'center'}
}

class Appbar extends Component {
    render() {
      return (
        <AppBar position="static" style={style.appbar}>
            <Toolbar>
            <Typography variant="h4" color="inherit">
                Summer internship portal
                {this.props.children}
            </Typography>
            </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default Appbar;