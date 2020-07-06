import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function MyAppBar(classes) {
  var toolBar = "toolBar";
  var links = [
    { name: "Deliverables", href: "#" },
    { name: "Notes", href: "#" },
    { name: "Demo", href: "#" },
    { name: "How this works", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Toolbar className={(classes.toolbar, toolBar)}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <span className="yellow-text">UM-SJTU</span> VE450 Group23 Real-Time
          On-Device Flow Statistics Detection and Prediction
        </Typography>

        <nav className="alignright">
          {links.map((link) => (
            <Link
              variant="button"
              color="inherit"
              href={link.href}
              className={classes.link}
              style={{ margin: "0 20px" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <a href="http://umji.sjtu.edu.cn/">
          <img
            alt="umsjtu-logo"
            className="umsjtu-logo"
            src="http://111.186.58.65/wp-content/uploads/2020/04/footer-logo.png"
          ></img>
        </a>
      </Toolbar>
    </AppBar>
  );
}

MyAppBar.propTypes = {
  classes: PropTypes.object,
};
