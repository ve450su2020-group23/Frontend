import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const menu_item_style = {
  textDecoration: "none",
  color: "black",
};

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function useScreenTop() {
  const isClient = typeof window === "object";

  function getTop() {
    return {
      screenTop: isClient ? window.pageYOffset : undefined,
    };
  }

  const [screenTop, setScreenTop] = useState(getTop);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleScroll() {
      setScreenTop(getTop());
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return screenTop;
}

export default function MyAppBar(classes) {
  const size = useWindowSize();
  const screenTop = useScreenTop();
  const [showNav, setShowNav] = useState(false);
  var toolBar = "toolBar";
  var appBar = "appBar";
  if (screenTop.screenTop < 70) {
    appBar = "";
  }
  const links = [
    { name: "About", href: "#" },
    { name: "Demo", href: "#DemoVideo" },
    { name: "Video", href: "#Video" },
    { name: "Deliverables", href: "#D1" },
    { name: "Notes", href: "#Notes" },
    { name: "Contact", href: "#Contact" },
  ];

  const navItems = [
    <a href="#" style={menu_item_style}>
      About
    </a>,
    <a href="#DemoVideo" style={menu_item_style}>
      Demo
    </a>,
    <a href="#Video" style={menu_item_style}>
      Video
    </a>,
    <a href="#D1" style={menu_item_style}>
      Deliverables
    </a>,
    <a href="#Notes" style={menu_item_style}>
      Notes
    </a>,
    <a href="#Contact" style={menu_item_style}>
      Contact
    </a>,
  ];
  var nav_links;
  if (size.width < 1150) {
    nav_links = null;
  } else {
    nav_links = links.map((link) => (
      <Link
        variant="button"
        color="inherit"
        href={link.href}
        className={classes.link}
        style={{ margin: "0 20px" }}
      >
        {link.name}
      </Link>
    ));
  }

  return (
    <AppBar elevation={0} className={(classes.appBar, appBar)}>
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        items={navItems}
        title={"Menu"}
        navStyle={{ width: "auto" }}
        titleStyle={{ backgroundColor: "rgb(1, 45, 94)" }}
      />

      <Toolbar className={(classes.toolbar, toolBar)}>
        <MenuIcon onClick={() => setShowNav(true)} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <span className="title-text">
            <span className="yellow-text">VE450 Group23 </span> Demo Page
          </span>
        </Typography>

        <nav className="my-nav">{nav_links}</nav>
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
