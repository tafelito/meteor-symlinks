// import React from 'react';
import "resize-observer-polyfill/dist/ResizeObserver.global";
import "react-native-web";

import { Meteor } from "meteor/meteor";

meteorInstall({
  // 5
  node_modules: {
    //
    "react-native": "react-native-web", //
  }, // 3
});

// Generate required css
const globalCSSStyles = `
  html {
    height: 100%;
    width: 100%;
    font-size: 15px;
  }

  body {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overscroll-behavior-y: none;
  }

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0 !important;
  }
`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = globalCSSStyles;
} else {
  style.appendChild(document.createTextNode(globalCSSStyles));
}

// Inject stylesheet
document.head.appendChild(style);

const AppRegistry = require("react-native").AppRegistry;
const App = require("../../ui/layout/App").default;

Meteor.startup(() => {
  AppRegistry.registerComponent("App", () => App);

  AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root"),
  });
});
