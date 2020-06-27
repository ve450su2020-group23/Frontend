import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        UM-SJTU VE450 Group 23
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Group23",
    description: [
      "Zhikai Chen",
      "Jiayu Yi",
      "Zhihao Ruan",
      "Zihao Shen",
      "Zekun Li",
    ],
  },
  {
    title: "Sponsors",
    description: ["Allan Zhu", "Allen Zhu"],
  },
  {
    title: "Instructors",
    description: ["Chengbin Ma"],
  },
];

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container
        maxWidth="md"
        component="footer"
        className={this.props.classes.footer}
      >
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
    );
  }
}
