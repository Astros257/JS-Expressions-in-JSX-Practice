//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
var React = require("react");
var ReactDom = require("react-dom");

const YOURNAME = "Jose";
const CURRENTYEAR = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
