import React, { useState } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import GithubCorner from "react-github-corner";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const menu_item_style = {
  textDecoration: "none",
  color: "black",
};
export default function MyAppBar(classes) {
  const [showNav, setShowNav] = useState(false);
  var toolBar = "toolBar";
  const links = [
    { name: "Deliverables", href: "#D1" },
    { name: "Notes", href: "#Notes" },
    { name: "Video", href: "#Video" },
    { name: "How this works", href: "#" },
    { name: "Contact", href: "#Contact" },
  ];

  const navItems = [
    <a href="#D1" style={menu_item_style}>
      Deliverables
    </a>,
    <a href="#Notes" style={menu_item_style}>
      Notes
    </a>,
    <a href="#Video" style={menu_item_style}>
      Video
    </a>,
    <a href="#" style={menu_item_style}>
      HOW THIS WORKS
    </a>,
    <a href="#Contact" style={menu_item_style}>
      CONTACT
    </a>,
  ];
  return (
    <AppBar elevation={0} className={classes.appBar}>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        items={navItems}
        title={"Menu"}
        navStyle={{ width: "auto" }}
      />

      <Toolbar className={(classes.toolbar, toolBar)}>
        <MenuIcon onClick={() => setShowNav(true)} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <GithubCorner href="https://github.com/ve450su2020-group23" />
          <span className="yellow-text">UM-SJTU</span> VE450 Group23 Real-Time
          On-Device Flow Statistics Detection and Prediction
        </Typography>

        <nav className="my-nav">
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
