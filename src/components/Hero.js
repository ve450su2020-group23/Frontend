import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Hero(props) {
  var hero = "hero";
  return (
    <Container
      maxWidth="lg"
      component="main"
      className={(props.classes.heroContent, hero)}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Automatic human traffic statistics collection and prediction with
        entrances detection.
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        component="p"
      >
        Due to COVID-19, multiple human traffic statistics collection methods
        are needed to work in parallel for different scenarios. The goal of our
        project is to use Computer Vision with Programmable logic device to
        achieve automatic human traffic statistics collection.
      </Typography>
    </Container>
  );
}

Hero.propTypes = {
  props: PropTypes.object,
};
