import React from "react";
import "./Form.css";

const Form = props => {
  let classList = "";
  let types = ["primary"];
  if (types.includes(props.type)) {
    // these class lists must take back ticks
    classList += ` form-${props.type}`;
  }
  if (props.large) {
    classList += ` form-large`;
  }
  return <button className={classList}>{props.label}</button>;
};
// see above, the style props.style comes from the button.stories.js and outerHTML also comes from the button stories

export default Form;

//this will add an eventlistener to the button you deploy
//<button className={classList} onClick={props.onClick}>{props.label}</button>
