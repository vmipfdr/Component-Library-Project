import React from "react";
import "./Voucher.css";

const Voucher = props => {
  let classList = "";
  if (props.size) {
    classList += ` ${props.size}-voucher`;
  }
  return (
    <div className={"voucher-complete" + classList}>
      <input className={"voucher-input" + classList} label={props.label} />
      <div className={"redeem-label" + classList}>Redeem</div>
    </div>
  );
};

export default Voucher;
