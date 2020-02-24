import React from "react";
import "./Form.css";

const Input = props => {
  let classList = "";
  if (props.size) {
    // these class lists must take back ticks
    classList += ` input-${props.size}`;
  }
  return (
    <div>
      <div className="input-label">{props.label}</div>
      <input className={classList} label={props.label} />
    </div>
  );
};
// see above, the style props.style comes from the button.stories.js and outerHTML also comes from the button stories

export default Input;

//this will add an eventlistener to the button you deploy
//<button className={classList} onClick={props.onClick}>{props.label}</button>
