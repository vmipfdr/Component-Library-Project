import React from "react";
import "./Counter.css";

const Counter = props => {
  let classList = "";
  return (
    <div className="counter-complete">
      <div className="subtract">-</div>
      <div className="count"></div>
      <div className="addition">+</div>
    </div>
  );
};

export default Counter;
