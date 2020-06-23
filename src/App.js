import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import clsx from  'clsx';
import './App.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        UM-SJTU VE450 Group 23
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  deliverables: {
    borderBottom: `1px solid ${theme.palette.divider}`,

  }
}));

const footers = [
  {
    title: 'Group23',
    description: ['Zhikai Chen', 'Jiayu Yi', 'Zhihao Ruan', 'Zihao Shen', 'Zekun Li'],
  },
  {
    title: 'Sponsors',
    description: ['Allan Zhu', 'Allen Zhu'],
  },
  {
    title: 'Instructors',
    description: ['Chengbin Ma'],
  },
];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            VE450 Group23 Real-Time On-Device Flow Statistics Detection and Prediction 
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              How this works
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Automatic human traffic statistics collection and prediction with entrances detection.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Due to COVID-19, multiple human traffic statistics collection methods are needed to work
         in parallel for different scenarios.  The goal of our project is to use Computer Vision with
           Programmable logic device to achieve automatic human traffic statistics collection.
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="xl" component="main" className={clsx(classes.footer, classes.deliverables)}>
        <div className="myContainer">
          <h2>
        Deliverable 1: People counting system with single human-defined entrance
          </h2>
        </div>

      </Container>
      <Container maxWidth="xl" component="main" className={clsx(classes.footer, classes.deliverables)}>
        <div className="myContainer">
          <h2>
        Deliverable 2: People counting system with automatic entrances detection and separated counting
          </h2>
        </div>

      </Container>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}