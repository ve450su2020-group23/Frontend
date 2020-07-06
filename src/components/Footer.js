import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
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

export default function Footer(classes) {
  var footer = "footer";
  return (
    <Container
      maxWidth="md"
      component="footer"
      className={(classes.footer, footer)}
    >
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="inherit" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="inherit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}

        <a href="http://umji.sjtu.edu.cn/">
          <img
            alt="umsjtu-logo"
            className="footer-logo"
            src="http://111.186.58.65/wp-content/uploads/2020/04/footer-logo.png"
          ></img>
        </a>
      </Grid>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

Footer.propTypes = {
  classes: PropTypes.object,
};
