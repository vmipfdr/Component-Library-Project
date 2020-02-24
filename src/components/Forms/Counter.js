import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div className="counter-complete">
        <div className="subtract">-</div>
        <div className="counter">{this.props.value}</div>
        <div className="addition">+</div>
      </div>
    );
  }
}

export default Counter;
