import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

import {useStyles} from 'static/constant/USESTYLES.js'

import D1 from 'components/D1.js'
import D2 from 'components/D2.js'
import Footer from 'components/Footer.js'
import Hero from 'components/Hero.js'
import MyAppBar from 'components/AppBar.js'

import 'static/css/App.css';

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      < MyAppBar classes={classes}/>

      < Hero classes={classes}/>


      <Container maxWidth="xl" component="main" className={clsx(classes.footer,)}>
        < D1/>
      </Container>

      <Container maxWidth="xl" component="main" className={clsx(classes.footer,)}>
        < D2/>
      </Container>

      < Footer classes={classes}/>

    </React.Fragment>
  );
}