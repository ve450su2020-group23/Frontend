import React from "react";
import ReactDOM from "react-dom";
import "./static/css/index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import * as serviceWorker from "./serviceWorker";

import varelaTtf from "./static/fonts/Varela-Regular.ttf";
import IBMPlexTtf from "./static/fonts/IBMPlexSerif-Regular.ttf";
import vollkornTtf from "./static/fonts/Vollkorn-Regular.ttf";
import alegreyaTtf from "./static/fonts/AlegreyaSans-Regular.ttf";
import sourceTtf from "./static/fonts/SourceSansPro-Regular.ttf";

const source = {
  fontFamily: "source",
  src: `
  local('source'),
  local('source'),
  url(${sourceTtf}) format('source')
`,
};

const alegraya = {
  fontFamily: "alegreya",
  src: `
  local('alegreya'),
  local('alegreya'),
  url(${alegreyaTtf}) format('alegraya')
`,
};

const varela = {
  fontFamily: "varela",
  src: `
  local('varela'),
  local('varela'),
  url(${varelaTtf}) format('varela')
`,
};

const vollkorn = {
  fontFamily: "vollkorn",
  src: `
  local('vollkorn'),
  local('vollkorn'),
  url(${vollkornTtf}) format('vollkorn')
`,
};

const IBMPlex = {
  fontFamily: "IBMPlex",
  src: `
  local('IBMPlex'),
  local('IBMPlex'),
  url(${IBMPlexTtf}) format('IBMPlex')
`,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Arial", "vollkorn", "varela", "alegreya", "IBMPlex"].join(
      ","
    ),
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [varela, IBMPlex, vollkorn, alegraya, source],
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
