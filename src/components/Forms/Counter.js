import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counters: 0
    };
    this.decreaseCounters = this.decreaseCounters.bind(this);
    this.increaseCounters = this.increaseCounters.bind(this);
  }

  increaseCounters() {
    let counters = this.state.counters + 1;

    this.setState({
      counters
    });
    console.log(this.state.counters);
  }

  decreaseCounters() {
    let counters = this.state.counters - 1;

    this.setState({
      counters
    });
    console.log(this.state.counters);
  }
  render() {
    return (
      <div className="counter-complete">
        <div className="subtract" onClick={this.props.decreaseCounters}>
          -
        </div>
        <div className="counter">{this.props.counters}</div>
        <div className="addition" onClick={this.props.increaseCounters}>
          +
        </div>
      </div>
    );
  }
}
export default Counter;
