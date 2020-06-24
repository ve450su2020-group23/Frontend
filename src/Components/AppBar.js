import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default class MyAppBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position="static" color="default" elevation={0} className={this.props.classes.appBar}>
            <Toolbar className={this.props.classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap className={this.props.classes.toolbarTitle}>
                VE450 Group23 Real-Time On-Device Flow Statistics Detection and Prediction
              </Typography>
              <nav>
                <Link variant="button" color="textPrimary" href="#" className={this.props.classes.link} style={{margin: '0 20px'}}>

                  How this works
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={this.props.classes.link} style={{margin: '0 20px'}}>
                  Contact
                </Link>
              </nav>
            </Toolbar>
          </AppBar>
        )
    }
}