import React, { Component } from "react";
import "./Check.css";

class Check extends Component {
  constructor() {
    super();

    this.state = "";
  }

  render() {
    return (
      <div className="checkbox">
        <div className="unchecked"></div>
        <div className="checked"></div>
      </div>
    );
  }
}

export default Check;
