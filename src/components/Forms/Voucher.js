import React, { Component } from "react";
import "./Voucher.css";

class Voucher extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <form className={"voucher-complete"}>
        <input className={"voucher-input"} label={"Voucher"} />
        <button className={"redeem-label"}>Redeem</button>
      </form>
    );
  }
}

export default Voucher;

// const Voucher = props => {
//   let classList = "";
//   if (props.size) {
//     classList += ` ${props.size}-voucher`;
//   }
//   return (
//     <div className={"voucher-complete" + classList}>
//       <input className={"voucher-input" + classList} label={props.label} />
//       <div className={"redeem-label" + classList}>Redeem</div>
//     </div>
//   );
// };

// export default Voucher;
