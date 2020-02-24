import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "default",
    "inverse-primary",
    "inverse-danger",
    "inverse-success",
    "inverse-warning",
    "inverse-default",
    "pale-primary",
    "pale-danger",
    "pale-success",
    "pale-warning",
    "pale-default",
    "cart-text",
    "favorite-text",
    "cart",
    "favorite"
  ];
  if (types.includes(props.type)) {
    // these class lists must take back ticks
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  return <button className={classList}>{props.label}</button>;
};
// see above, the style props.style comes from the button.stories.js and outerHTML also comes from the button stories

export default Button;

//this will add an eventlistener to the button you deploy
//<button className={classList} onClick={props.onClick}>{props.label}</button>
