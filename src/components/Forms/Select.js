import React from "react";
import "./Select.css";
import Arrow from "./arrow down.png";

const Select = props => {
  let classList = "";
  if (props.size) {
    // these class lists must take back ticks
    classList += ` ${props.size}-select`;
  }
  if (props.type) {
    classList += ` ${props.type}-select`;
  }
  return (
    <div className={"select-complete" + classList}>
      <div className={"select-label" + classList}>{props.label}</div>
      <div>
        <img src="./arrow down.png" />
      </div>
    </div>
  );
};
export default Select;
