import React from "react";
import "./Select.css";
import Arrow from "./arrow down.svg";

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
    <select className={"select-label" + classList}>
      <option value="">{props.label}</option>
      <option value="">{props.label}</option>
      <option value="">{props.label}</option>
    </select>
  );
};
export default Select;

{
  /* <div className={"select-label" + classList}>{props.label}</div>
  <div className="arrow"></div> */
}
