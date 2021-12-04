//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
const myName = "Mark C";
const today = new Date();
const year = today.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
